import { ShoppingCart, User, Globe, PlusCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-amber-500 to-pink-500" />
          <span className="text-lg font-semibold tracking-tight">Souq Libya</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#listings" className="text-sm text-white/80 hover:text-white">Browse</a>
          <a href="#" className="text-sm text-white/80 hover:text-white">Deals</a>
          <a href="#" className="text-sm text-white/80 hover:text-white">Help</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-md border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:border-white/20 md:flex md:items-center md:gap-2">
            <PlusCircle size={18} />
            <span>Sell</span>
          </button>
          <button className="rounded-md p-2 hover:bg-white/5" aria-label="Language">
            <Globe size={20} />
          </button>
          <button className="rounded-md p-2 hover:bg-white/5" aria-label="Account">
            <User size={20} />
          </button>
          <button className="rounded-md p-2 hover:bg-white/5" aria-label="Cart">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
