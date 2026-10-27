import { useState } from "react"

const faqs = [
  {
    q: "Do I need a job offer for EB-1A?",
    a: "No. EB-1A is a self-petition category. You can file on your own behalf without an employer, job offer, or labour certification. You do need to show you intend to continue working in your area of extraordinary ability in the US.",
  },
  {
    q: "Can I apply from outside the US?",
    a: "Yes. You can file the I-140 from anywhere. If approved, you'll complete consular processing at a US embassy in your country. If you're already in the US on a valid visa, you can file for Adjustment of Status (I-485) instead.",
  },
  {
    q: "What if I'm from India or China?",
    a: "EB-1 priority dates for India and China can experience backlogs, though they're far shorter than EB-2 or EB-3. Check the monthly Visa Bulletin from the Department of State for current wait times. EB-1 is still the fastest employment-based path for these countries.",
  },
  {
    q: "How much does the whole process cost?",
    a: "Filing fees alone are around $700 for the I-140. Premium processing adds $2,805. Attorney fees typically range from $5,000-$15,000 for EB-1A. I-485 filing is $1,440 per person. Total cost with an attorney usually runs $10,000-$25,000.",
  },
  {
    q: "Can I include my spouse and children?",
    a: "Yes. Your spouse and unmarried children under 21 can be included as derivative beneficiaries. They receive their own green cards when yours is approved.",
  },
  {
    q: "What happens if my petition is denied?",
    a: "You can file a motion to reopen or reconsider with USCIS, or appeal to the Administrative Appeals Office (AAO). Many denials result from insufficient evidence, not ineligibility. You can also re-file with stronger documentation.",
  },
  {
    q: "Is a PhD required?",
    a: "No. There is no formal education requirement for EB-1A. USCIS evaluates your achievements and recognition, not your degrees. Many successful petitioners have bachelor's degrees or no formal degree at all.",
  },
  {
    q: "Can startup founders qualify?",
    a: "Absolutely. Founders can demonstrate extraordinary ability through criteria like original business contributions, high salary/equity compensation, media coverage, judging (advisory roles), and leading role in a distinguished organisation. VC funding and revenue milestones serve as strong supporting evidence.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
          <div>
            <p className="text-[13px] font-mono text-stone-400 mb-4">08</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-500">
              Clear answers to the most common EB-1 questions.
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} className={`${i > 0 ? "border-t border-stone-100" : ""}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-stone-900">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className={`flex-shrink-0 mt-1 text-stone-400 transition-transform ${open === i ? "rotate-45" : ""}`}
                  >
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all ${open === i ? "max-h-[300px] pb-5" : "max-h-0"}`}>
                  <p className="text-[14px] leading-[1.7] text-stone-500 pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
