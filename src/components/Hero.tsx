export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-[1100px] mx-auto px-6">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[12px] font-medium text-[#1e3a5f]">Updated for FY2027 processing</span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.03em] text-stone-900 mb-6">
            The EB-1 visa.{" "}
            <span className="italic text-stone-400">America's green card for extraordinary talent.</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-stone-500 max-w-[560px] mb-10">
            The EB-1 is the fastest, most prestigious path to permanent residency in the United States.
            No labour certification required. No employer sponsorship needed (for EB-1A).
            This guide covers everything you need to know.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#categories" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white text-[15px] font-medium rounded-lg hover:bg-[#16304d] transition-all hover:-translate-y-px">
              Explore the categories
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#criteria" className="text-[15px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
              Am I eligible?
            </a>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 w-[280px]">
          {[
            { label: "Priority date", value: "Current", note: "No backlog for most countries" },
            { label: "Processing time", value: "4-8 mo", note: "15 days with premium processing" },
            { label: "Annual cap", value: "40,040", note: "Plus unused family-sponsored visas" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] font-medium text-stone-400 uppercase tracking-wider">{item.label}</span>
              </div>
              <p className="text-2xl font-display font-medium text-stone-900 tracking-tight">{item.value}</p>
              <p className="text-[12px] text-stone-400 mt-0.5">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
