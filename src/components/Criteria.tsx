const criteria = [
  { num: "1", title: "Awards", desc: "Nationally or internationally recognised prizes or awards for excellence in your field." },
  { num: "2", title: "Membership", desc: "Membership in associations that require outstanding achievements, as judged by recognised experts." },
  { num: "3", title: "Published material", desc: "Published material about you in professional or major trade publications, or other major media." },
  { num: "4", title: "Judging", desc: "Participation as a judge of the work of others in the same or an allied field." },
  { num: "5", title: "Original contributions", desc: "Original scientific, scholarly, artistic, athletic, or business-related contributions of major significance." },
  { num: "6", title: "Scholarly articles", desc: "Authorship of scholarly articles in professional journals or other major media." },
  { num: "7", title: "Exhibitions", desc: "Display of your work at artistic exhibitions or showcases." },
  { num: "8", title: "Leading role", desc: "A leading or critical role in distinguished organisations." },
  { num: "9", title: "High salary", desc: "Commanding a high salary or significantly high remuneration relative to others in the field." },
  { num: "10", title: "Commercial success", desc: "Commercial successes in the performing arts, as shown by box office receipts, record/video sales, etc." },
]

export function Criteria() {
  return (
    <section id="criteria" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
          <div>
            <p className="text-[13px] font-mono text-stone-400 mb-4">03</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
              The 10 criteria
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-500 mb-6">
              For EB-1A, you must meet <strong className="text-stone-700 font-semibold">at least 3 of these 10 criteria</strong>,
              or provide evidence of a one-time achievement of major international recognition.
            </p>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200/60">
              <p className="text-[13px] leading-relaxed text-amber-800">
                Meeting 3 criteria is the minimum threshold. USCIS then evaluates the <em>totality of the evidence</em> to
                determine if you've truly risen to the top of your field. Quality of evidence matters more than quantity.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {criteria.map((c) => (
              <div key={c.num} className="group p-4 rounded-lg border border-stone-100 hover:border-[#1e3a5f]/20 hover:bg-[#1e3a5f]/[0.02] transition-all">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[12px] text-stone-300 pt-0.5 w-5 flex-shrink-0">{c.num.padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-stone-900 mb-1">{c.title}</h3>
                    <p className="text-[13px] leading-relaxed text-stone-500">{c.desc}</p>
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
