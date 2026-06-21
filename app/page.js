import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
export default function Home() {
  return (
     <main className="min-h-screen flex flex-col items-center justify-center px-100 bg-gradient-to-br from-cyan-600 to-purple-600 ">
      <Hero />
      <About />
     <Skills />
   <Projects /> 
    </main>
  );
}