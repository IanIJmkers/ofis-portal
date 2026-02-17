import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function PortalSection({ title, description, href, icon, cta, art }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full flex flex-col rounded-2xl bg-white shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Abstract art header */}
      <div className="relative h-44 sm:h-52 overflow-hidden">
        {art}
        {/* Fade to white at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-linear-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start px-7 pb-7 pt-2 grow">
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-700 mb-5 transition-all duration-300 group-hover:bg-gold-50 group-hover:border-gold-300 group-hover:text-gold-700">
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-heading text-navy-900 mb-2 tracking-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-warm-gray-500 leading-relaxed mb-6">
          {description}
        </p>

        {/* Spacer */}
        <div className="grow" />

        {/* CTA */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 rounded-lg px-4 py-2.5 bg-navy-900/5 transition-all duration-200 group-hover:bg-navy-900 group-hover:text-white">
          {cta}
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.a>
  );
}
