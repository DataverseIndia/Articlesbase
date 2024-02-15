import Image from "next/image";
import Hero from "./home/Hero";
import Navbar from "./home/Navbar";
import ExpertReviewed from "./home/ExpertReviewed";
import RecentlyPublished from "./home/RecentlyPublished";
import About from "./home/About";
import Categories from "./home/Categories";
import TopReviews from "./home/TopReviews";
import Testimonials from "./home/Testimonials";
import HowToGuides from "./home/HowToGuides";
import Footer from "./home/Footer";
import NewHero from "./home/NewHero";
import FactChecked from "./home/FactChecked";
import MostRead from "./home/MostRead";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <NewHero />
      <ExpertReviewed />
      <FactChecked />
      <RecentlyPublished />
      <About />
      <Categories />
      <TopReviews />
      <Testimonials />
      <HowToGuides />
      <MostRead />
      <Footer />
    </main>
  );
}
