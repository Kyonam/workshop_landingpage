import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          AI 프로덕트 빌딩 1기 워크샵
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          AI로 내 아이디어를 <br />
          <span className="gradient-text">실제 프로덕트로</span> 만드는 <br />
          가장 빠른 방법
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          아이디어는 있지만 코딩이나 AI 개발 장벽 때문에 망설이고 계신가요? <br className="hidden md:block" />
          노코드 툴과 최신 LLM을 활용해 6주 만에 나만의 서비스를 런칭하세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#pricing"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            워크샵 참여하기
          </Link>
          <Link 
            href="#curriculum"
            className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
          >
            커리큘럼 보기
          </Link>
        </div>

        {/* Dashboard Mockup Placeholder */}
        <div className="mt-20 relative px-4">
          <div className="gradient-border rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="bg-zinc-900 aspect-video md:aspect-[21/9] flex items-center justify-center">
              <span className="text-zinc-700 font-medium">Dashboard Preview / Screenshot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
