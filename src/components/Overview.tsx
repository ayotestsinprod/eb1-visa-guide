export function Overview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <div>
            <p className="text-[13px] font-mono text-stone-400 mb-4">01</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900">
              What is the EB-1?
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[15px] leading-[1.75] text-stone-600">
              The <strong className="text-stone-900 font-semibold">EB-1 (Employment-Based First Preference)</strong> is
              the highest-priority employment-based green card category in the US immigration system.
              It's designed for individuals who have demonstrated extraordinary ability, outstanding
              academic achievement, or executive-level multinational experience.
            </p>
            <p className="text-[15px] leading-[1.75] text-stone-600">
              Unlike other employment-based categories, the EB-1A subcategory allows you to
              self-petition without an employer sponsor or labour certification (PERM). This makes
              it uniquely attractive for founders, researchers, artists, and athletes who want
              to control their own immigration timeline.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { stat: "1st", label: "Priority category" },
                { stat: "No", label: "PERM required" },
                { stat: "Self", label: "Petition option" },
                { stat: "15d", label: "Premium processing" },
              ].map((item, i) => (
                <div key={i} className="text-center py-4 px-3 rounded-lg bg-stone-50 border border-stone-100">
                  <p className="font-display text-2xl font-medium text-[#1e3a5f] tracking-tight">{item.stat}</p>
                  <p className="text-[12px] text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
