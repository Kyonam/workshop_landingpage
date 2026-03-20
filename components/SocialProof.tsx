const testimonials = [
  {
    name: "김민재",
    role: "IT 서비스 기획자",
    content: "코딩을 전혀 몰랐던 제가 4주 만에 영어 학습 AI 앱을 런칭했습니다. 이제는 외주 개발사 없이 직접 아이디어를 구현할 수 있다는 게 꿈만 같아요."
  },
  {
    name: "이지후",
    role: "예비 창업자",
    content: "아이디어 검증을 위해 MVP가 필요했는데, 워크샵에서 배운 툴들로 2주 만에 유료 결제 기능까지 붙인 서비스를 만들었습니다. 최고의 투자였어요."
  },
  {
    name: "박서연",
    role: "프리랜서 디자이너",
    content: "디자인은 자신 있었지만 개발이 늘 장벽이었어요. Cursor와 v0를 배우고 나니 디자인부터 배포까지 혼자 모든 걸 끝낼 수 있게 되었습니다."
  }
];

export default function SocialProof() {
  return (
    <section id="social" className="py-24 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">Social Proof</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">수강생들이 증명하는 <br className="md:hidden" /> <span className="gradient-text">놀라운 변화</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017V14C7.017 11.7909 5.2261 10 3.017 10H2.017V7H3.017C6.883 7 10.017 10.134 10.017 14V21H2.017Z"/></svg>
               </div>
               <p className="text-zinc-300 italic mb-8 relative z-10">"{item.content}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple" />
                 <div>
                   <p className="font-bold text-white">{item.name}</p>
                   <p className="text-xs text-zinc-500 uppercase tracking-widest">{item.role}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
