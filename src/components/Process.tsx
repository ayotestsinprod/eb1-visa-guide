const steps = [
  {
    num: "01",
    title: "Evaluate your profile",
    desc: "Assess which EB-1 category fits. For EB-1A, map your achievements against the 10 criteria. For EB-1B/C, confirm employer eligibility and your qualifying role.",
    detail: "Many applicants underestimate their qualifications. If you've published, judged, led, or been covered by media, you may already meet 3+ criteria.",
  },
  {
    num: "02",
    title: "Gather evidence",
    desc: "Compile documentation: recommendation letters from experts, citation records, contracts, press coverage, award certificates, salary data, and organisational charts.",
    detail: "Expert opinion letters are often the most impactful piece of evidence. Get 5-8 letters from recognised figures who can speak to the significance of your work.",
  },
  {
    num: "03",
    title: "File Form I-140",
    desc: "Submit the Immigrant Petition for Alien Workers (Form I-140) with USCIS. For EB-1A, you are the petitioner. For EB-1B/C, your employer files on your behalf.",
    detail: "Filing fee is $700. Premium processing ($2,805) gets you a decision within 15 calendar days.",
  },
  {
    num: "04",
    title: "Adjust status or consular process",
    desc: "If you're in the US, file Form I-485 (Adjustment of Status) concurrently or after I-140 approval. If abroad, attend a consular interview at your nearest US embassy.",
    detail: "With current priority dates, many EB-1 applicants can file I-140 and I-485 concurrently, saving months.",
  },
  {
    num: "05",
    title: "Receive your green card",
    desc: "Once approved, you receive conditional or full permanent residency. You can live and work anywhere in the US with no employer restrictions.",
    detail: "Green card is valid for 10 years and renewable. You can apply for citizenship after 5 years of permanent residency.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="border-t border-stone-200 pt-14 md:pt-20">
          <div className="max-w-[560px] mb-14">
            <p className="text-[13px] font-mono text-stone-400 mb-4">04</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
              The process, step by step
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-500">
              From evaluation to green card. Here's what the EB-1 journey actually looks like.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className={`grid md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-8 ${
                i < steps.length - 1 ? "border-b border-stone-100" : ""
              }`}>
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1e3a5f] text-white text-[13px] font-semibold">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-stone-900 tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-stone-600 max-w-[560px] mb-3">
                    {step.desc}
                  </p>
                  <p className="text-[13px] leading-relaxed text-stone-400 max-w-[560px] italic">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
