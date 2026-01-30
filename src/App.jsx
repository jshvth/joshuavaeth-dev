import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";

function App() {
  return (
    <main className="bg-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <Stack />
    </main>
  );
}

export default App;
