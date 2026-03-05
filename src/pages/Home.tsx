import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Seller } from "../sections/Seller";
import { AboutMe } from "../sections/AboutMe";
import { Process } from "../sections/Process";
import { Actual } from "../sections/Actual";
import { AiNative } from "../sections/AiNative";
import { CallToAction } from "../sections/CallToAction";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";

export default function Home() {
    return (
        <div className="w-full flex md:contents flex-col gap-12">
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
    );
}
