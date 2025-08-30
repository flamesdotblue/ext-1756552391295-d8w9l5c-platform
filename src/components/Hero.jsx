import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';

const categories = [
  'Cars',
  'Electronics',
  'Homes & Rentals',
  'Fashion',
  'Mobiles',
  'Motorbikes',
  'Watches',
  'Cameras',
];

export default function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-neutral-950/80" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                Discover, buy, and sell in Libya
              </h1>
              <p className="mt-3 text-white/80 sm:text-lg">
                From Tripoli to Benghazi — the marketplace for cars, electronics, fashion, and more.
              </p>
            </div>

            <div className="mt-6 w-full max-w-2xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('listings');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/70 p-2 backdrop-blur"
              >
                <div className="flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2">
                  <Search size={18} className="text-white/60" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for cars, phones, apartments..."
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-tr from-amber-500 to-pink-500 px-4 py-2 text-sm font-medium text-black hover:opacity-90"
                >
                  Search
                </button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setQuery(c)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="mt-6 text-xs text-white/60">
                العربية متاحة • الأسعار بالدينار الليبي (LYD)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
