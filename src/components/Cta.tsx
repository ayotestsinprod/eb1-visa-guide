export function Cta() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="rounded-2xl bg-[#1e3a5f] p-10 md:p-16 text-center">
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white mb-4">
            Not sure if you qualify?
          </h2>
          <p className="text-[15px] leading-relaxed text-[#8fb3d9] max-w-[480px] mx-auto mb-8">
            The EB-1 has a higher bar than most green card categories, but many people who qualify don't realise it.
            Start by mapping your achievements to the criteria.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#criteria"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1e3a5f] text-[15px] font-medium rounded-lg hover:bg-stone-50 transition-colors"
            >
              Review the 10 criteria
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#8fb3d9] hover:text-white transition-colors"
            >
              Compare categories
            </a>
          </div>

          <p className="text-[12px] text-[#6b98c4] mt-8">
            This guide is for informational purposes only and does not constitute legal advice. Consult a qualified immigration attorney for your specific situation.
          </p>
        </div>
      </div>
    </section>
  )
}
