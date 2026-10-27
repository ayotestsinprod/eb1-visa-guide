const categories = [
  {
    id: "eb1a",
    tag: "EB-1A",
    title: "Extraordinary Ability",
    who: "Scientists, artists, athletes, educators, and business leaders who have risen to the top of their field.",
    key: "Self-petition. No employer or job offer required.",
    standard: "Sustained national or international acclaim, demonstrated by meeting at least 3 of 10 criteria or a one-time major achievement (e.g. Nobel, Oscar, Olympic medal).",
    examples: [
      "Published researcher with 500+ citations",
      "Startup founder with notable exits or funding",
      "Award-winning filmmaker or musician",
      "Professional athlete with national ranking",
    ],
  },
  {
    id: "eb1b",
    tag: "EB-1B",
    title: "Outstanding Professors & Researchers",
    who: "Academics and researchers recognised internationally for outstanding achievements in their field.",
    key: "Requires employer sponsorship and a permanent job offer in a tenure/tenure-track or comparable research role.",
    standard: "At least 3 years of experience in research or teaching, plus evidence of international recognition (2 of 6 criteria).",
    examples: [
      "University professor with peer-reviewed publications",
      "Corporate R&D scientist at a major lab",
      "Post-doc transitioning to a permanent research role",
      "Medical researcher with original contributions",
    ],
  },
  {
    id: "eb1c",
    tag: "EB-1C",
    title: "Multinational Managers & Executives",
    who: "Senior executives and managers transferring to a US office of their multinational employer.",
    key: "Requires employer sponsorship. Must have worked abroad for the company (or affiliate) for at least 1 of the past 3 years.",
    standard: "Managerial or executive capacity, overseeing a function, department, or organisation. The US entity must have been operating for at least 1 year.",
    examples: [
      "VP transferring from London HQ to New York",
      "Country manager moving to US operations",
      "Director overseeing a team of 50+ abroad",
      "C-suite executive at a multinational",
    ],
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="border-t border-stone-200 pt-14 md:pt-20">
          <div className="max-w-[560px] mb-14">
            <p className="text-[13px] font-mono text-stone-400 mb-4">02</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
              Three categories, one priority level
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-500">
              The EB-1 has three subcategories. Each has different requirements, but all share first-preference priority and faster processing.
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="rounded-xl border border-stone-200 bg-white overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="inline-flex px-2.5 py-1 rounded-md bg-[#1e3a5f] text-white text-[12px] font-semibold tracking-wide">
                      {cat.tag}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-medium text-stone-900 tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[14px] text-stone-500 mt-1">{cat.who}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-2">Key advantage</p>
                      <p className="text-[14px] leading-relaxed text-stone-600">{cat.key}</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-2">Standard</p>
                      <p className="text-[14px] leading-relaxed text-stone-600">{cat.standard}</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-2">Who qualifies</p>
                      <ul className="space-y-1.5">
                        {cat.examples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-[14px] text-stone-600">
                            <span className="w-1 h-1 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
