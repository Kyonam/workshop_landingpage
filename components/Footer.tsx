export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter gradient-text">
            AI BUILDER
          </div>
          <div className="flex gap-8 text-sm text-zinc-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">문의하기</a>
          </div>
          <div className="text-zinc-600 text-xs">
            © 2026 AI Product Building Workshop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
