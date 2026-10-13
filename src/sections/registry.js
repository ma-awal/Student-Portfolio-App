import Hero from "./Hero";
import About from "./About";
import CardGrid from "./CardGrid";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Steps from "./Steps";
import Faq from "./Faq";
import Cta from "./Cta";
import Schedule from "./Schedule";
import Contact from "./Contact";

// data te "type" -> component. Notun section type add korte ekhane ekta line add korun.
// Prottek type er "variant" diye alada layout choose hoy (README te list ache).
export const registry = {
  hero: Hero, about: About, cards: CardGrid, timeline: Timeline, testimonials: Testimonials,
  skills: Skills, steps: Steps, faq: Faq, cta: Cta, schedule: Schedule, contact: Contact,
};
