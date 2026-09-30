"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button onClick={copy} aria-label="Copy request example" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-white/70 transition hover:border-white/25 hover:text-white">
    {copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copied" : "Copy"}
  </button>;
}
