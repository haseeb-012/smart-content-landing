// Capture marketing screenshots of OUR dashboard in an isolated browser context (own storage, no cache).
// node shoot.mjs <outDir>
import { writeFileSync } from "node:fs";

const OUT = process.argv[2];
const BASE = "http://localhost:3001";
const ver = await (await fetch("http://127.0.0.1:9333/json/version")).json();
const ws = new WebSocket(ver.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
};
const send = (method, params = {}, sessionId) =>
  new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, (d) => (d.error ? rej(new Error(`${method}: ${d.error.message}`)) : res(d.result)));
    ws.send(JSON.stringify({ id: i, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const { browserContextId } = await send("Target.createBrowserContext", { disposeOnDetach: true });
const { targetId } = await send("Target.createTarget", { url: "about:blank", browserContextId });
const { sessionId: s } = await send("Target.attachToTarget", { targetId, flatten: true });
await send("Page.enable", {}, s);
await send("Runtime.enable", {}, s);
await send("Network.enable", {}, s);
await send("Network.setCacheDisabled", { cacheDisabled: true }, s);
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false }, s);
await send("Emulation.setScrollbarsHidden", { hidden: true }, s);

const evalJs = async (expression) => (await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }, s)).result.value;
const go = async (path) => {
  await send("Page.navigate", { url: BASE + path }, s);
  // Wait until the client app has hydrated (main becomes visible) and a heading rendered.
  for (let i = 0; i < 40; i++) {
    await sleep(300);
    const ready = await evalJs("!!document.querySelector('main.opacity-100 h1')").catch(() => false);
    if (ready) break;
  }
  await sleep(500);
};
const click = (text) => evalJs(`(()=>{const b=[...document.querySelectorAll('button,[role=tab]')].find(e=>e.textContent.trim().includes(${JSON.stringify(text)})); b?.click(); return !!b})()`);
const shot = async (name) => {
  await evalJs("window.scrollTo(0,0); document.querySelectorAll('[aria-live] > *').forEach(e=>e.remove()); true");
  await sleep(400);
  const { data } = await send("Page.captureScreenshot", { format: "png" }, s);
  writeFileSync(`${OUT}/${name}.png`, Buffer.from(data, "base64"));
  console.log("saved", name);
};

// ---- seed realistic demo activity
await go("/dashboard");
for (const v of ["v_5", "v_12", "v_21", "v_33"]) { await go(`/videos/${v}`); await click("Analyze video"); await sleep(4200); }
await go("/videos/v_5"); await click("Create script"); await sleep(2500);
await evalJs(`(()=>{const k='smartcontent.v1';const s=JSON.parse(localStorage.getItem(k));
  s.social=[{platform:'tiktok',handle:'yourbrand',code:'SC-DEMO',status:'verified'}];
  s.profile={name:'Ana Creator',email:'ana@smartcontent.example'}; s.workspaces[0].name='Fitness niche';
  s.data.ws_1.ideas[1] && (s.data.ws_1.ideas[1].shortlisted=true);
  s.data.ws_1.savedHooks=['Nobody tells you this about home workouts…','Stop overthinking cardio if you want views.'];
  localStorage.setItem(k, JSON.stringify(s)); return true})()`);

// ---- capture
await go("/dashboard"); await shot("dashboard");
await go("/videos"); await shot("videos");
await go("/videos/v_5"); await shot("analysis");
await go("/channels"); await shot("channels");
await go("/ideas"); await shot("ideas");
await go("/hooks"); await click("Generator"); await sleep(300);
await evalJs(`(()=>{const i=document.querySelector('input[placeholder*="meal"]');const set=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;set.call(i,'home workouts');i.dispatchEvent(new Event('input',{bubbles:true}));return true})()`);
await sleep(300); await click("Generate hooks"); await sleep(600); await shot("hooks");
const sid = await evalJs("JSON.parse(localStorage.getItem('smartcontent.v1')).data.ws_1.scripts[0].id");
await go(`/scripts/${sid}`); await shot("script");
await go("/collections"); await shot("collections");

await send("Target.disposeBrowserContext", { browserContextId });
ws.close();
