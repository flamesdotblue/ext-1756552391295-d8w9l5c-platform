import { Car, Smartphone, Home, Shirt, Bike, Watch, Camera, Package } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Toyota Land Cruiser 2016',
    price: 185000,
    city: 'Tripoli',
    img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    category: 'Cars',
    icon: Car,
  },
  {
    id: 2,
    title: 'iPhone 14 Pro 256GB',
    price: 5400,
    city: 'Benghazi',
    img: 'https://images.unsplash.com/photo-1662560963884-6bc40fce1cfe?q=80&w=1200&auto=format&fit=crop',
    category: 'Mobiles',
    icon: Smartphone,
  },
  {
    id: 3,
    title: '2BR Apartment, Al Andalus',
    price: 2300,
    city: 'Tripoli',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    category: 'Homes',
    icon: Home,
  },
  {
    id: 4,
    title: 'Yamaha R3 2019',
    price: 25000,
    city: 'Misrata',
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop',
    category: 'Motorbikes',
    icon: Bike,
  },
  {
    id: 5,
    title: 'Rolex Datejust 41',
    price: 72000,
    city: 'Benghazi',
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
    category: 'Watches',
    icon: Watch,
  },
  {
    id: 6,
    title: 'Canon EOS R + RF 24-105',
    price: 16500,
    city: 'Sabha',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    category: 'Cameras',
    icon: Camera,
  },
  {
    id: 7,
    title: 'Sneakers – Air Max 97',
    price: 480,
    city: 'Tripoli',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    category: 'Fashion',
    icon: Shirt,
  },
  {
    id: 8,
    title: 'Gaming PC – RTX 4070',
    price: 9800,
    city: 'Benghazi',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Electronics',
    icon: Package,
  },
];

function formatLYD(value) {
  return new Intl.NumberFormat('en-LY', { style: 'currency', currency: 'LYD', maximumFractionDigits: 0 }).format(value);
}

function Card({ item }) {
  const Icon = item.icon;
  return (
    <a
      href="#"
      className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-sm transition hover:border-white/20 hover:bg-neutral-900"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
          <Icon size={14} />
          <span>{item.category}</span>
        </div>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="line-clamp-1 font-medium">{item.title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-amber-400">{formatLYD(item.price)}</span>
          <span className="text-white/60">{item.city}</span>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedListings() {
  return (
    <section id="listings" className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Featured in Libya</h2>
          <p className="text-sm text-white/60">Popular items from trusted sellers across the country</p>
        </div>
        <div className="hidden gap-2 md:flex">
          {['All', 'Cars', 'Electronics', 'Mobiles', 'Homes', 'Fashion'].map((c) => (
            <button key={c} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/90 hover:bg-white/5">
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
        >
          Load more listings
        </a>
      </div>
    </section>
  );
}
