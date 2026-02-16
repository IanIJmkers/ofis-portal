import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function PortalSection({ title, description, href, icon, cta }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full flex flex-col rounded-2xl border border-navy-900/8 bg-white shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-navy-900/12"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Gold top accent line */}
      <div className="h-0.5 bg-linear-to-r from-transparent via-gold-600 to-transparent" />

      {/* Decorative warm glow behind icon area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-48 h-48 bg-gold-300/[0.07] rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-150" />

      <div className="relative flex flex-col items-center text-center px-8 pt-14 pb-10 sm:pt-16 sm:pb-12 grow">
        {/* Icon with halo ring */}
        <div className="relative mb-8">
          <div className="absolute inset-0 -m-1.5 rounded-2xl bg-gold-400/6 transition-all duration-300 group-hover:bg-gold-400/12 group-hover:-m-2.5" />
          <div className="relative w-14 h-14 rounded-xl bg-cream border border-navy-100 flex items-center justify-center text-navy-700 transition-all duration-300 group-hover:bg-gold-50 group-hover:border-gold-300 group-hover:text-gold-700">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-heading text-navy-900 mb-3 tracking-tight">
          {title}
        </h2>

        {/* Divider */}
        <div className="w-8 h-0.5 bg-gold-500/40 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-gold-500" />

        {/* Description */}
        <p className="text-sm sm:text-base text-warm-gray-500 leading-relaxed mb-8 max-w-xs">
          {description}
        </p>

        {/* Spacer */}
        <div className="grow" />

        {/* CTA pill */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 rounded-full px-4 py-2 bg-transparent transition-all duration-200 group-hover:bg-gold-50 group-hover:text-gold-800">
          {cta}
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>

      {/* Bottom gradient for grounding */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-linear-to-t from-gold-50/40 to-transparent pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.a>
  );
}
