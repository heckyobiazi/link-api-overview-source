import { ArrowRight, ArrowUpRight, ArrowLeftRight, Check, ChevronRight, CircleHelp, Code2, Globe2, Layers3, LockKeyhole, Radio, Route, ShieldCheck, WalletCards, Webhook } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import linkLogo from "../assets/LINK_Logo_Black.png";

const docs = "https://docs.linkio.world/docs/getting-started";
const overview = "https://docs.linkio.world/docs/platform-overview";
const onramp = "https://docs.linkio.world/docs/business-onramp";

const request = `curl --request POST \\
  --url https://api.linkio.world/otc/onramp \\
  --header 'Content-Type: application/json' \\
  --header 'ngnc-sec-key: <YOUR_SECRET_KEY>' \\
  --data '{
    "customer_id": "cut93498342",
    "currency": "USD",
    "amount": "25000",
    "stables": "USDC",
    "wallet_address": "0xYourBaseWallet",
    "network": "BASE",
    "paymentDetails": {
      "accountNumber": "875104368977",
      "routingNumber": "026073150",
      "accountName": "Acme Corp"
    }
  }'`;

const flow = [
  { number: "01", title: "Get your credentials", copy: "Create a LINK Bridge account and generate a secret key in the developer dashboard.", icon: LockKeyhole },
  { number: "02", title: "Create a request", copy: "Send the customer, currency, amount and destination details to the right ramp endpoint.", icon: Code2 },
  { number: "03", title: "Move funds", copy: "LINK coordinates the local payment and stablecoin settlement for your chosen flow.", icon: ArrowLeftRight },
  { number: "04", title: "Track progress", copy: "Use transaction references and status updates to keep your product in sync.", icon: Radio },
  { number: "05", title: "Listen for events", copy: "Receive signed webhooks so your app can react as a transaction changes state.", icon: Webhook },
];

export default function Home() {
  return (
    <main className="practice-page">
      <header className="practice-nav">
        <a className="practice-logo" href="/">LINK<span>.</span></a>
        <a className="practice-button" href="#start">Get API access</a>
      </header>

      <section className="practice-hero">
        <p className="practice-label">PAYMENTS INFRASTRUCTURE, CONNECTED</p>
        <h1>Move money.<br />Build what’s next.</h1>
        <p className="practice-copy">
          One API to connect your product to payment rails and track transactions.
        </p>
        <a id="start" className="practice-button" href="#quickstart">
          Start building →
        </a>
      </section>
    </main>
  );
}
