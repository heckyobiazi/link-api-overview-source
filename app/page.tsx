import { ArrowRight, ArrowUpRight, ArrowLeftRight, Check, ChevronRight, CircleHelp, Code2, Globe2, Layers3, LockKeyhole, Radio, Route, ShieldCheck, WalletCards, Webhook } from "lucide-react";
import Image from "next/image";
import { CopyButton } from "@/components/copy-button";
import linkLogo from "../assets/LINK_Logo_Black.png";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  size?: "sm";
  variant?: "outline";
};

function ButtonLink({ children, className = "", size, variant, ...props }: ButtonLinkProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-semibold transition";
  const sizing = size === "sm" ? "h-9 px-3 text-[12px]" : "h-11 px-5 text-[13px]";
  const style = variant === "outline"
    ? "border border-[#dfe3eb] bg-white text-[#242833] hover:border-[#0038ff] hover:text-[#0038ff]"
    : "bg-[#0038ff] text-white hover:bg-[#002ed1]";

  return <a {...props} className={`${base} ${sizing} ${style} ${className}`}>{children}</a>;
}

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
  return <main className="overflow-hidden">
    <header className="relative z-10 border-b border-black/[.06] bg-white/90 backdrop-blur">
      <div className="shell flex h-[76px] items-center justify-between">
        <a href="#top" aria-label="LINK home" className="flex items-center gap-2.5">
          <Image src={linkLogo} alt="" className="h-[22px] w-auto" priority />
        </a>
        <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#626875] md:flex" aria-label="Main navigation">
          <a href="#platform" className="transition hover:text-black">Platform</a><a href="#how-it-works" className="transition hover:text-black">How it works</a><a href="#quickstart" className="transition hover:text-black">Quickstart</a>
        </nav>
        <div className="flex items-center gap-3"><a className="hidden text-[13px] font-medium text-[#626875] transition hover:text-black sm:block" href={docs} target="_blank" rel="noreferrer">Documentation</a><ButtonLink href="#quickstart" size="sm" className="gap-2">Start building <ArrowUpRight size={14} /></ButtonLink></div>
      </div>
    </header>

    <section id="top" className="relative border-b border-black/[.06]">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="shell relative grid min-h-[625px] items-center gap-12 py-16 lg:grid-cols-[1fr_1.03fr] lg:gap-14 lg:py-20">
        <div className="max-w-[560px]">
          <div className="ml-[5px] not-italic text-[16px] font-semibold text-[#0038ff]">FX infrastructure for modern payments</div>
          <h1 className="text-[clamp(48px,6.2vw,76px)] font-semibold leading-[.99] tracking-[-.07em]">Move money<br />across borders.<br /><span className="text-[#0038ff]">Build on one API.</span></h1>
          <p className="mt-6 max-w-[475px] text-[16px] leading-7 text-[#656b78]">LINK connects local payment rails to stablecoin settlement, so your team can build global payment experiences without stitching the infrastructure together itself.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3"><ButtonLink href="#quickstart" className="gap-2">Explore the API <ArrowRight size={16} /></ButtonLink><ButtonLink href={overview} target="_blank" rel="noreferrer" variant="outline" className="gap-2">Platform overview <ArrowUpRight size={15} /></ButtonLink></div>
          <div className="mt-9 flex items-center gap-3 text-[12px] text-[#777d89]"><span className="flex -space-x-1.5"><i className="h-6 w-6 rounded-full border-2 border-white bg-[#0038ff]"/><i className="h-6 w-6 rounded-full border-2 border-white bg-[#ad91e9]"/><i className="h-6 w-6 rounded-full border-2 border-white bg-[#b9fc6b]"/></span><span>One integration. Multiple payment rails.</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -inset-7 rounded-[34px] bg-[#edf1ff] blur-2xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-[#e8eaf0] bg-white p-5 shadow-[0_24px_90px_-36px_rgba(20,36,90,.28)] sm:p-7">
            <div className="flex items-center justify-between"><div><div className="text-[11px] font-semibold uppercase tracking-[.11em] text-[#737989]">Payment orchestration</div><div className="mt-1 text-[17px] font-semibold tracking-[-.03em]">One connection. Two directions.</div></div><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f1f4ff] text-[#0038ff]"><ArrowLeftRight size={18}/></span></div>
            <div className="relative mt-7 grid grid-cols-[1fr_90px_1fr] items-center gap-2 sm:grid-cols-[1fr_112px_1fr]">
              <div className="rounded-2xl border border-[#e9ebf0] bg-[#fafbfc] p-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#555d6c] shadow-sm"><Globe2 size={19}/></span><div className="mt-4 text-[12px] font-semibold">Local rails</div><div className="mt-1 text-[11px] text-[#7a808d]">Bank · wallet · payout</div></div>
              <div className="relative flex flex-col items-center gap-2"><span className="absolute left-0 right-0 top-[20px] border-t border-dashed border-[#b6c2ff]"/><span className="z-[1] grid h-[42px] w-[42px] place-items-center rounded-full border border-[#dce3ff] bg-white text-[#0038ff] shadow-sm"><ArrowLeftRight size={18}/></span><span className="font-sora z-[1] rounded-full bg-white px-1 text-[10px] font-semibold text-[#0038ff]">LINK API</span></div>
              <div className="rounded-2xl border border-[#e9ebf0] bg-[#fafbfc] p-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e9edff] text-[#0038ff]"><Layers3 size={19}/></span><div className="mt-4 text-[12px] font-semibold">Digital dollars</div><div className="mt-1 text-[11px] text-[#7a808d]">USDC · USDT</div></div>
            </div>
            <div className="mt-5 rounded-2xl bg-[#111318] p-4 text-white sm:p-5">
              <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-[11px] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-[#b9fc6b]"/> TRANSACTION STATUS</div><span className="rounded-full bg-[#b9fc6b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#b9fc6b]">PROCESSING</span></div>
              <div className="mt-4 flex items-center justify-between"><div><div className="text-[11px] text-white/45">On-ramp</div><div className="mt-1 text-[18px] font-medium tracking-tight">USD <span className="text-white/35">→</span> USDC</div></div><div className="text-right"><div className="text-[11px] text-white/45">Settlement</div><div className="mt-1 text-[13px] font-medium">Status via webhook</div></div></div>
              <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/10"><div className="h-full w-[67%] rounded-full bg-[#0038ff]"/></div><div className="mt-2 flex justify-between text-[9px] text-white/35"><span>REQUEST RECEIVED</span><span>SETTLEMENT</span><span>COMPLETE</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-[#858b97]"><span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#0038ff]"/> Built-in orchestration</span></div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#e9ebf0] bg-white px-4 py-3 shadow-lg sm:block"><div className="flex items-center gap-2 text-[11px] font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#f3efff] text-[#8961df]"><Webhook size={14}/></span>Webhook delivered <Check size={13} className="text-[#38a665]"/></div><div className="ml-9 mt-0.5 text-[10px] text-[#818692]">transaction_status_updated</div></div>
        </div>
      </div>
    </section>

    <section className="border-b border-black/[.06] bg-white">
      <div className="shell grid grid-cols-1 divide-y divide-[#e8eaf0] py-7 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-8">
        <div className="py-4 sm:px-8 sm:py-0 sm:first:pl-0"><div className="text-[31px] font-semibold tracking-[-.06em]">25<span className="text-[#0038ff]">+</span></div><div className="mt-1 text-[12px] text-[#727885]">currencies across Business API coverage</div></div>
        <div className="py-4 sm:px-8 sm:py-0"><div className="text-[31px] font-semibold tracking-[-.06em]">400<span className="text-[#0038ff]">+</span></div><div className="mt-1 text-[12px] text-[#727885]">currency pairs across the LINK platform</div></div>
        <div className="py-4 sm:px-8 sm:py-0"><div className="text-[31px] font-semibold tracking-[-.06em]">One<span className="text-[#0038ff]"> API</span></div><div className="mt-1 text-[12px] text-[#727885]">for ramp orchestration and settlement</div></div>
      </div>
    </section>

    <section id="platform" className="bg-[#f8f9fb] py-24 sm:py-28">
      <div className="shell">
        <div className="grid items-end gap-8 md:grid-cols-[.95fr_1.05fr]"><div><div className="ml-[5px] not-italic text-[16px] font-semibold text-[#0038ff]">The infrastructure layer</div><h2 className="section-title max-w-[480px]">Build the payment experience. Skip the plumbing.</h2></div><p className="max-w-[460px] pb-1 text-[15px] leading-7 text-[#656b78]">Going global means dealing with local payment methods, conversion, compliance and status tracking. LINK brings those moving pieces into one integration your team can build around.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: Route, n: "01", title: "One integration, many rails", copy: "Connect bank transfers and stablecoin wallets through a unified API, instead of maintaining a different integration for every market." },
            { icon: ShieldCheck, n: "02", title: "Complexity handled upstream", copy: "LINK provides FX and stablecoin payment infrastructure, with onboarding and compliance tools built into the platform." },
            { icon: Radio, n: "03", title: "Know what happens next", copy: "Track transactions by reference and use webhook events to keep customers and internal systems up to date." },
          ].map(({ icon: Icon, n, title, copy }) => <article key={n} className="group rounded-[20px] border border-[#e8eaf0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_-28px_rgba(12,29,82,.24)] sm:p-7"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-[13px] bg-[#eef2ff] text-[#0038ff]"><Icon size={19}/></span><span className="text-[11px] font-medium text-[#b1b5bf]">{n}</span></div><h3 className="mt-9 text-[19px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#747a87]">{copy}</p><div className="mt-7 h-px bg-[#eceef2] transition group-hover:bg-[#ccd5ff]"/></article>)}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#111318] py-20 text-white sm:py-24">
      <div className="absolute -right-24 -top-48 h-[470px] w-[470px] rounded-full border border-white/[.07]"/><div className="absolute -right-3 -top-28 h-[330px] w-[330px] rounded-full border border-white/[.07]"/><div className="absolute right-24 top-0 h-[180px] w-[180px] rounded-full bg-[#0038ff]/30 blur-[90px]"/>
      <div className="shell relative grid items-center gap-10 md:grid-cols-[1fr_1fr]"><div><div className="ml-[5px] not-italic text-[16px] font-semibold text-[#b9fc6b]">What you can build</div><h2 className="max-w-[490px] text-[clamp(36px,4.4vw,55px)] font-semibold leading-[1.04] tracking-[-.06em]">Global money movement, inside your product.</h2><p className="mt-5 max-w-[460px] text-[14px] leading-7 text-white/55">Give users and businesses a simpler way to move between local currencies and digital dollars, with the flow shaped around your product.</p><a href={overview} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#b9fc6b] hover:text-white">See platform capabilities <ArrowUpRight size={15}/></a></div>
        <div className="grid grid-cols-2 gap-3">{[
          { icon: WalletCards, title: "Stablecoin wallets", text: "Connect fiat funding and payouts." }, { icon: ArrowLeftRight, title: "On & off ramps", text: "Bridge fiat and USDC or USDT." }, { icon: Globe2, title: "Remittance flows", text: "Move value across markets." }, { icon: Layers3, title: "Global payroll", text: "Build settlement into a platform." },
        ].map(({ icon: Icon, title, text }, i) => <div key={title} className={`rounded-[17px] border border-white/[.1] p-5 ${i === 0 ? "bg-[#1b1d24]" : "bg-white/[.035]"}`}><Icon size={19} className="text-[#9aa8ff]"/><h3 className="mt-7 text-[13px] font-semibold">{title}</h3><p className="mt-1.5 text-[11px] leading-5 text-white/45">{text}</p></div> )}</div>
      </div>
    </section>

    <section id="how-it-works" className="bg-white py-24 sm:py-28">
      <div className="shell"><div className="mx-auto max-w-[630px] text-center"><div className="ml-[5px] not-italic text-[16px] font-semibold text-[#0038ff] justify-center mb-5">A clear path to your first flow</div><h2 className="section-title">From API key to transaction event.</h2><p className="mt-5 text-[14px] leading-6 text-[#717784]">A familiar developer journey, with LINK coordinating the payment rails behind the scenes.</p></div>
        <div className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{flow.map(({ number, title, copy, icon: Icon }, i) => <article key={number} className="relative rounded-[17px] border border-[#e9ebf0] bg-white p-5"><div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f0f3ff] text-[#0038ff]"><Icon size={16}/></span><span className="text-[10px] font-semibold tracking-[.1em] text-[#a5aab4]">{number}</span></div><h3 className="mt-6 text-[14px] font-semibold">{title}</h3><p className="mt-2 text-[11px] leading-[1.7] text-[#777d89]">{copy}</p>{i < flow.length - 1 && <ChevronRight className="absolute -right-[11px] top-1/2 z-[1] hidden -translate-y-1/2 rounded-full bg-white text-[#aab1c2] lg:block" size={20}/>}</article>)}</div>
      </div>
    </section>

    <section id="quickstart" className="bg-[#f8f9fb] py-24 sm:py-28">
      <div className="shell"><div className="grid items-end gap-8 md:grid-cols-[1fr_.8fr]"><div><div className="ml-[4px] not-italic text-[16px] font-semibold text-[#0038ff]">Quickstart</div><h2 className="section-title max-w-[560px]">Your first request starts here.</h2></div><p className="max-w-[450px] pb-1 text-[14px] leading-7 text-[#656b78]">Start with a LINK Bridge account and a server-side secret key. This illustrative Business API request shows the shape of an on-ramp call.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="overflow-hidden rounded-[20px] bg-[#111318] shadow-[0_20px_55px_-30px_rgba(14,22,50,.5)]">
            <div className="flex items-center justify-between border-b border-white/[.08] px-5 py-4">
              <div className="flex items-center gap-3"><span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-[#ff7167]"/><i className="h-2 w-2 rounded-full bg-[#f4bf4f]"/><i className="h-2 w-2 rounded-full bg-[#57c75b]"/></span><span className="text-[11px] text-white/50">Create a Business on-ramp</span></div>
              <CopyButton value={request}/>
            </div>
            <div className="code-scroll overflow-x-auto p-5 sm:p-6"><pre className="min-w-[500px] whitespace-pre text-[11px] leading-[1.8] text-[#c3e88d]"><code>{request}</code></pre></div>
            <div className="border-t border-white/[.08] px-5 py-3 text-[10px] leading-5 text-white/40">Keep secret keys on your server. Never expose them in browser code. Verify required fields and supported networks in the current endpoint guide.</div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#e7e9ee] bg-white p-6 sm:p-7"><div><div className="text-[11px] font-bold uppercase tracking-[.1em] text-[#737987]">Before you begin</div><h3 className="mt-2 text-[23px] font-semibold tracking-[-.04em]">A few things to have ready.</h3></div><ul className="mt-6 space-y-4">{["A LINK Bridge account and API credentials", "A server-side environment for secret keys", "A customer ID, source currency and amount", "A destination wallet and supported network", "A webhook endpoint to receive status updates"].map(item => <li key={item} className="flex items-start gap-3 text-[12px] leading-5 text-[#5e6471]"><span className="mt-0.5 grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#eef2ff] text-[#0038ff]"><Check size={11} strokeWidth={3}/></span>{item}</li>)}</ul><div className="mt-auto pt-7"><div className="mb-3 h-px bg-[#eceef2]"/><div className="flex flex-wrap gap-2"><ButtonLink href="https://app.linkio.world" target="_blank" rel="noreferrer" size="sm" className="gap-2">Open developer dashboard <ArrowUpRight size={13}/></ButtonLink><ButtonLink href={onramp} target="_blank" rel="noreferrer" size="sm" variant="outline" className="gap-2">Read endpoint guide <ArrowUpRight size={13}/></ButtonLink></div></div></div>
        </div>
        <div className="mt-5 flex flex-col justify-between gap-4 rounded-[17px] border border-[#e6e9f0] bg-white px-5 py-4 sm:flex-row sm:items-center"><div className="flex items-start gap-3"><span className="mt-0.5 text-[#0038ff]"><CircleHelp size={17}/></span><p className="text-[12px] leading-5 text-[#626875]"><strong className="font-semibold text-[#242833]">Where next?</strong> Check coverage, rates, processing windows, customer onboarding and webhook setup for your use case.</p></div><a href={docs} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#0038ff]">Browse LINK docs <ArrowUpRight size={14}/></a></div>
      </div>
    </section>

    <section className="bg-[#0038ff] py-16 text-white sm:py-[72px]"><div className="shell flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><div className="text-[11px] font-semibold uppercase tracking-[.13em] text-white/65">Your next global flow</div><h2 className="mt-3 text-[clamp(30px,4vw,45px)] font-semibold leading-tight tracking-[-.055em]">Make money movement part of your product.</h2></div><ButtonLink href="mailto:partnerships@linkio.africa" className="h-12 shrink-0 bg-white px-6 text-[#0038ff] hover:bg-[#eff2ff]">Contact Us <ArrowUpRight size={15}/></ButtonLink></div></section>

    <footer className="bg-white"><div className="shell flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between"><a href="#top" aria-label="LINK home" className="flex items-center gap-2.5">
         
        </a><p className="text-[10px] leading-5 text-[#8a8f9a]">© 2026 LINK. API capabilities y vary by product and market.<br className="sm:hidden"/> Refer to the documentation for current coverage and requirements.</p><div className="flex gap-5 text-[11px] font-medium text-[#6e7481]"><a href={docs} target="_blank" rel="noreferrer" className="hover:text-[#0038ff]">Docs</a><a href="mailto:engineering@linkio.africa" className="hover:text-[#0038ff]">Support</a></div></div></footer>
  </main>;
}
