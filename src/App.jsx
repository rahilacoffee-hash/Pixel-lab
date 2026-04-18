import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
