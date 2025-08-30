import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedListings />
      </main>
      <Footer />
    </div>
  );
}

export default App;
