import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

export default function PortalSection({ title, description, href, icon, cta, features = [] }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full flex flex-col rounded-2xl bg-white shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Top section */}
      <div className="px-7 pt-7 pb-5">
        {/* Icon + Title row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-600 shrink-0 transition-colors duration-300 group-hover:bg-gold-50 group-hover:text-gold-700">
            {icon}
          </div>
          <h2 className="text-lg sm:text-xl font-heading text-navy-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm text-warm-gray-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="mx-7 border-t border-warm-gray-200" />

      {/* Features list */}
      <div className="px-7 pt-5 pb-4 grow">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-warm-gray-600">
              <Check size={15} className="text-gold-600 shrink-0 mt-0.5" strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-7 pb-7">
        <span className="flex items-center justify-center gap-2 w-full text-sm font-semibold rounded-xl px-4 py-3 bg-navy-900 text-white transition-all duration-200 group-hover:bg-navy-800">
          {cta}
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.a>
  );
}
