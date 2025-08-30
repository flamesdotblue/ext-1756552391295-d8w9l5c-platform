export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 text-sm text-white/70 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <div className="mb-2 text-base font-semibold text-white">Souq Libya</div>
          <p className="max-w-sm">A modern marketplace tailored for Libya. Buy and sell cars, electronics, fashion, homes, and more.</p>
        </div>
        <div>
          <div className="mb-2 font-medium text-white">Explore</div>
          <ul className="space-y-2">
            <li><a href="#listings" className="hover:text-white">Featured</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">Sell an item</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-medium text-white">Help</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Safety tips</a></li>
            <li><a href="#" className="hover:text-white">Terms & privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Souq Libya. All rights reserved.
      </div>
    </footer>
  );
}
