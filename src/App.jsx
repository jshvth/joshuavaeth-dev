import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Footer />
    </main>
  );
}

export default App;
