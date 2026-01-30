import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Reveal from "./components/Reveal";
import CustomCursor from "./components/CustomCursor"; // Importieren

function App() {
  return (
    <main className="bg-dark-bg cursor-none">
      {" "}
      {/* cursor-none versteckt den Standard-Mauszeiger */}
      <CustomCursor />
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Stack />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}

export default App;
