import { useState, useEffect } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#fcfcfb]/90 backdrop-blur-xl border-b border-stone-200/60" : "bg-transparent"
    }`}>
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1e3a5f] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
              <line x1="4" y1="22" x2="4" y2="15"/>
            </svg>
          </div>
          <span className="text-[14px] font-semibold text-stone-900 tracking-tight">EB-1 Guide</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Categories", "Criteria", "Process", "FAQ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium bg-[#1e3a5f] text-white rounded-lg hover:bg-[#16304d] transition-colors">
          Check eligibility
        </a>
      </div>
    </nav>
  )
}
