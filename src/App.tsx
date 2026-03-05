import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Seller } from "./sections/Seller"
import { AboutMe } from "./sections/AboutMe"
import { Process } from "./sections/Process"
import { Actual } from "./sections/Actual"
import { AiNative } from "./sections/AiNative"
import { CallToAction } from "./sections/CallToAction"
import { Projects } from "./sections/Projects"
import { Contact } from "./sections/Contact"

function App() {
  return (
    <div className="w-screen min-h-dvh pb-96 overflow-x-hidden px-8 sm:px-24 md:px-36 flex flex-col gap-12 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
      <Header />
      <Hero />
      <Seller />
      <AboutMe />
      <Projects />
      <Contact />
      <Process />

      <AiNative />
      <CallToAction />
      <Actual />
    </div>
  )
}

export default App
