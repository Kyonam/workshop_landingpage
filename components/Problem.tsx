const problems = [
  {
    title: "늘어나는 기술 부채와 AI 소외감",
    description: "매일 쏟아지는 새로운 AI 뉴스들, 하지만 내 아이디어를 실제로 구현할 방법은 여전히 막막하신가요?"
  },
  {
    title: "아이디어의 한계와 외주 비용",
    description: "개발 지식이 없어 외주를 맡기자니 비용이 부담되고, 내가 직접 하자니 어디서부터 시작할지 모르겠나요?"
  },
  {
    title: "성장의 정체기",
    description: "단순히 AI를 사용하는 사용자(User)를 넘어, 무언가를 직접 만드는 제작자(Builder)로 거듭나고 싶으신가요?"
  }
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-accent-blue mb-4">The Problem</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            아이디어는 넘치는데 <br className="md:hidden" />
            <span className="text-zinc-600">구현할 방법이 없으신가요?</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-xl font-bold text-zinc-500 group-hover:bg-accent-blue group-hover:text-white transition-all">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 glass rounded-[2.5rem] bg-gradient-to-br from-accent-blue/10 to-transparent border-accent-blue/20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h4 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
                "아이디어를 프로덕트로 만드는 것은 <br />
                더 이상 <span className="gradient-text">개발자만의 영역이 아닙니다.</span>"
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed">
                워크샵을 통해 6주간 당신은 단순 사용자가 아닌, AI 툴을 도구 삼아 아이디어를 실제 서비스로 런칭하는 '빌더'가 됩니다.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="px-8 py-4 bg-accent-blue text-white font-bold rounded-2xl text-center">
                해결책 확인하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
