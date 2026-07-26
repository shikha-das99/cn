"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // UI demo only — wire this to an email API (Resend/Postmark) or a
    // backend route before going live. No data leaves the browser yet.
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <div className="relative rounded-2xl border border-ink-500/60 bg-ink-700/50 p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3 py-10 text-center"
          >
            <CheckCircle2 size={36} className="text-sage-light" />
            <h3 className="font-display text-xl text-ivory">Message sent</h3>
            <p className="max-w-xs text-sm text-ink-300">
              Thanks for reaching out — this demo doesn&apos;t deliver mail
              yet, but the flow is ready for your API.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm text-sage-light underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink-300">
                  Name
                </label>
                <input id="name" required placeholder="Your name" className="input" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink-300">
                  Email
                </label>
                <input id="email" required type="email" placeholder="you@example.com" className="input" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink-300">
                Subject
              </label>
              <input id="subject" placeholder="What's this about?" className="input" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-widest2 text-ink-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us what you need..."
                className="input resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ivory py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-sage disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={15} /> Send message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
