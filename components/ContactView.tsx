"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactView() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-xl">
        <span className="text-xs uppercase tracking-widest2 text-sage-light">
          Get in touch
        </span>
        <h1 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">
          Questions before you order?
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">
          Bulk orders, formulation questions, or something not on the shelf
          yet — send us a note and we&apos;ll get back to you.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6 lg:col-span-2"
        >
          {[
            { icon: Mail, label: "Email", value: "hello@cleannest.in" },
            { icon: MapPin, label: "Based in", value: "Guwahati, Assam, India" },
            { icon: Clock, label: "Response time", value: "Within 1 business day" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-ink-500/60 bg-ink-700/40 p-5"
            >
              <Icon size={20} className="mt-0.5 shrink-0 text-sage-light" />
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ink-300">
                  {label}
                </p>
                <p className="mt-1 text-sm text-ivory">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
