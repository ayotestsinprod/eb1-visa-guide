export function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-[#1e3a5f] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
              </div>
              <span className="text-[14px] font-semibold text-stone-900">EB-1 Guide</span>
            </div>
            <p className="text-[13px] leading-relaxed text-stone-500 max-w-[280px]">
              A free, comprehensive guide to the EB-1 employment-based green card for extraordinary talent.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">Categories</p>
            <ul className="space-y-2.5">
              {[
                { label: "EB-1A Extraordinary Ability", href: "#eb1a" },
                { label: "EB-1B Professors & Researchers", href: "#eb1b" },
                { label: "EB-1C Multinational Managers", href: "#eb1c" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">Guide</p>
            <ul className="space-y-2.5">
              {[
                { label: "10 Criteria", href: "#criteria" },
                { label: "Process", href: "#process" },
                { label: "Timeline", href: "#timeline" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">Resources</p>
            <ul className="space-y-2.5">
              {[
                { label: "USCIS EB-1 page", href: "#" },
                { label: "Visa Bulletin", href: "#" },
                { label: "Form I-140", href: "#" },
                { label: "Find an attorney", href: "#" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12px] text-stone-400">
            This guide is for informational purposes only. It does not constitute legal advice.
          </p>
          <p className="text-[12px] text-stone-400">
            &copy; {new Date().getFullYear()} EB-1 Guide
          </p>
        </div>
      </div>
    </footer>
  )
}
