const rows = [
  { feature: "Priority level", eb1: "1st (highest)", eb2: "2nd", eb3: "3rd" },
  { feature: "PERM required", eb1: "No (EB-1A/B)", eb2: "Yes (waived for NIW)", eb3: "Yes" },
  { feature: "Self-petition", eb1: "Yes (EB-1A)", eb2: "Yes (NIW only)", eb3: "No" },
  { feature: "Premium processing", eb1: "Yes ($2,805)", eb2: "Yes ($2,805)", eb3: "Yes ($2,805)" },
  { feature: "Typical wait (India)", eb1: "Current-2 yrs", eb2: "10+ years", eb3: "10+ years" },
  { feature: "Typical wait (ROW)", eb1: "Current", eb2: "Current-1 yr", eb3: "Current-2 yrs" },
  { feature: "Education required", eb1: "No formal req.", eb2: "Master's+ or equiv.", eb3: "Bachelor's+" },
  { feature: "Employer needed", eb1: "No (EB-1A)", eb2: "No (NIW)", eb3: "Yes" },
]

export function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-[560px] mb-14">
          <p className="text-[13px] font-mono text-stone-400 mb-4">06</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
            EB-1 vs EB-2 vs EB-3
          </h2>
          <p className="text-[15px] leading-relaxed text-stone-500">
            How the EB-1 stacks up against other employment-based green card categories.
          </p>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="py-3 pr-6 text-[12px] font-semibold uppercase tracking-wider text-stone-400 w-[200px]" />
                <th className="py-3 px-6 text-[13px] font-semibold text-[#1e3a5f] bg-[#1e3a5f]/5 rounded-t-lg">EB-1</th>
                <th className="py-3 px-6 text-[13px] font-semibold text-stone-600">EB-2</th>
                <th className="py-3 px-6 text-[13px] font-semibold text-stone-600">EB-3</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i < rows.length - 1 ? "border-b border-stone-100" : ""}>
                  <td className="py-3 pr-6 text-[13px] font-medium text-stone-500">{row.feature}</td>
                  <td className="py-3 px-6 text-[13px] text-stone-900 font-medium bg-[#1e3a5f]/[0.02]">{row.eb1}</td>
                  <td className="py-3 px-6 text-[13px] text-stone-600">{row.eb2}</td>
                  <td className="py-3 px-6 text-[13px] text-stone-600">{row.eb3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[12px] text-stone-400 mt-6 italic">
          Wait times based on Department of State Visa Bulletin data. ROW = Rest of World. Actual timelines may vary.
        </p>
      </div>
    </section>
  )
}
