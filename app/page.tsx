import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";

// ─── More sections will be uncommented as we build them ───────────────────
import About      from "@/components/sections/About";
import Skills     from "@/components/sections/Skills";
import Projects   from "@/components/sections/Projects";
import Education  from "@/components/sections/Education";
import Journey    from "@/components/sections/Journey";
import Contact    from "@/components/sections/Contact";
import Footer     from "@/components/sections/Footer";
import Quote from "@/components/sections/Quote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      { <About />    }
      { <Skills />   }
      { <Projects /> }
      { <Education />}
      { <Journey />  }
      {<Quote />     }
      { <Contact />  }
      { <Footer />   }
    </main>
  );
}