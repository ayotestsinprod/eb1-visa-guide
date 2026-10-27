export function Timeline() {
  return (
    <section className="py-20 md:py-28 bg-[#1e3a5f]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-[560px] mb-14">
          <p className="text-[13px] font-mono text-[#6b98c4] mb-4">05</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white mb-4">
            Realistic timelines
          </h2>
          <p className="text-[15px] leading-relaxed text-[#8fb3d9]">
            How long each phase actually takes, based on current USCIS processing data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-[14px] font-semibold text-white mb-6">Standard processing</h3>
            <div className="space-y-4">
              {[
                { phase: "Profile evaluation & evidence", time: "2-4 months", bar: "25%" },
                { phase: "I-140 petition preparation", time: "1-2 months", bar: "15%" },
                { phase: "USCIS I-140 adjudication", time: "4-8 months", bar: "50%" },
                { phase: "I-485 / Consular processing", time: "3-12 months", bar: "60%" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] text-[#8fb3d9]">{item.phase}</span>
                    <span className="text-[13px] font-medium text-white">{item.time}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[#6b98c4]" style={{ width: item.bar }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
              <span className="text-[13px] text-[#8fb3d9]">Total estimated</span>
              <span className="text-[15px] font-semibold text-white">10-26 months</span>
            </div>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-[14px] font-semibold text-white">Premium processing</h3>
              <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-500/20 text-emerald-300 rounded-full">Recommended</span>
            </div>
            <div className="space-y-4">
              {[
                { phase: "Profile evaluation & evidence", time: "2-4 months", bar: "35%" },
                { phase: "I-140 petition preparation", time: "1-2 months", bar: "20%" },
                { phase: "USCIS I-140 adjudication", time: "15 calendar days", bar: "5%" },
                { phase: "I-485 / Consular processing", time: "3-12 months", bar: "60%" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] text-[#8fb3d9]">{item.phase}</span>
                    <span className={`text-[13px] font-medium ${i === 2 ? "text-emerald-300" : "text-white"}`}>{item.time}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${i === 2 ? "bg-emerald-400" : "bg-[#6b98c4]"}`} style={{ width: item.bar }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
              <span className="text-[13px] text-[#8fb3d9]">Total estimated</span>
              <span className="text-[15px] font-semibold text-emerald-300">6-18 months</span>
            </div>
            <p className="text-[12px] text-[#6b98c4] mt-3">
              Premium processing fee: $2,805 on top of the $700 I-140 filing fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
