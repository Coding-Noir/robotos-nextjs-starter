import Faq from "@/components/Faq";
import GetRobots from "@/components/GetRobots";
import Hero from "@/components/Hero";
import Intermission from "@/components/Intermission";
import Rarity from "@/components/Rarity";
import RecentBlogs from "@/components/RecentBlogs";

export default function Home() {
  return (
    <>
      <Hero />
      <GetRobots />
      <Intermission />
      <Rarity />
      <RecentBlogs />
      <Faq />
    </>
  );
}
