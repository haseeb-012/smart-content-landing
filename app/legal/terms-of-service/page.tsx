import { ProsePage } from "@/components/sections/prose-page";

export const metadata = { title: "Terms of Service | Smart Content" };

// Draft only — must be reviewed by legal before launch.
export default function Terms() {
  return (
    <ProsePage title="Terms of Service" updated="October 2026 (draft)">
      <p>These draft terms describe how Smart Content may be used. They will be finalized after legal review.</p>
      <h2>Your account</h2>
      <p>You are responsible for activity in your account and workspaces. Email changes are not supported in this version.</p>
      <h2>Credits</h2>
      <p>One credit equals one chargeable action. Credits reset monthly and do not roll over. Failed actions never consume credits.</p>
      <h2>Billing</h2>
      <p>Billing runs in Stripe test mode. No real payments are collected. Plans may be upgraded or downgraded at any time; there are no refunds, and you can cancel anytime once live billing starts.</p>
      <h2>Acceptable use</h2>
      <p>Don&apos;t abuse the service, attempt to bypass credit or plan limits, or use it to infringe anyone&apos;s rights.</p>
    </ProsePage>
  );
}
