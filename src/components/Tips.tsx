const tips = [
  {
    title: "Think like an adjudicator",
    body: "USCIS officers review hundreds of petitions. Make their job easy. Lead with your strongest criteria, use clear headers, and include a summary of evidence for each criterion. Don't make them search for your argument.",
  },
  {
    title: "Quality over quantity in recommendation letters",
    body: "Five strong letters from respected figures in your field beat fifteen generic ones. Each letter should speak to a specific criterion and explain why your contribution is significant. Avoid letters that read like they were written by the same person.",
  },
  {
    title: "Contextualise everything",
    body: "\"500 citations\" means nothing without context. Explain what a typical citation count is in your field, what percentile you're in, and why the cited work matters. Comparisons and benchmarks turn numbers into evidence.",
  },
  {
    title: "Don't underestimate yourself",
    body: "Many people who qualify for EB-1A don't think they do. If you've reviewed papers for journals, that's criterion 4. If your startup was covered in TechCrunch, that's criterion 3. Map your achievements before dismissing the category.",
  },
  {
    title: "Consider filing EB-1A and EB-2 NIW concurrently",
    body: "There's no rule against filing multiple petitions. Many applicants file an EB-1A as their primary and an EB-2 NIW as a backup. If the EB-1A is denied, you still have the EB-2 in progress.",
  },
  {
    title: "Keep building your profile",
    body: "If you don't quite meet 3 criteria today, you might in 6 months. Accept that peer review invitation. Write that article. Speak at that conference. Proactively build evidence before you file.",
  },
]

export function Tips() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="border-t border-stone-200 pt-14 md:pt-20">
          <div className="max-w-[560px] mb-14">
            <p className="text-[13px] font-mono text-stone-400 mb-4">07</p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
              Strategy and tips
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-500">
              What actually moves the needle on an EB-1 petition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="p-6 rounded-xl border border-stone-200 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <span className="font-mono text-[12px] text-stone-300 pt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15px] font-semibold text-stone-900">{tip.title}</h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-stone-500 pl-8">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
