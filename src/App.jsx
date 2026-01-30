import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      {/* Später kommen hier <About />, <Stack /> usw. hin */}
    </main>
  );
}

export default App;
