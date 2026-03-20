import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full">
        <div className="text-xl font-bold tracking-tighter gradient-text">
          AI BUILDER
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#problem" className="hover:text-white transition-colors">문제점</Link>
          <Link href="#solution" className="hover:text-white transition-colors">해결책</Link>
          <Link href="#curriculum" className="hover:text-white transition-colors">커리큘럼</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>
        <Link 
          href="#pricing" 
          className="bg-white text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors"
        >
          지금 시작하기
        </Link>
      </div>
    </nav>
  );
}
