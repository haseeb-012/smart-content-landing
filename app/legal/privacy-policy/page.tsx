import { ProsePage } from "@/components/sections/prose-page";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata = { title: "Privacy Policy | Smart Content" };

// Draft only — must be reviewed by legal before launch (PRD §18 Q12: data retention policy is open).
export default function PrivacyPolicy() {
  return (
    <ProsePage title="Privacy Policy" updated="October 2026 (draft)">
      <p>This draft explains what Smart Content collects and why. It will be finalized after legal review.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Account details: name, email and sign-in provider.</li>
        <li>Workspace content you create: channels, ideas, scripts, projects and exports.</li>
        <li>Usage events (without personal data) to improve the product.</li>
      </ul>
      <h2>What we don&apos;t collect</h2>
      <p>We never ask for your social media passwords. Account verification uses a code you place in your bio.</p>
      <h2>Payments</h2>
      <p>Billing currently runs in Stripe test mode. No real card data is collected; Stripe hosts all payment fields.</p>
      <h2>Your rights</h2>
      <p>You own your transcripts, reports and scripts. You can export or delete your data at any time. We do not train models on your data without consent.</p>
      <h2>Contact</h2>
      <p>Email <a className="text-white underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
    </ProsePage>
  );
}
