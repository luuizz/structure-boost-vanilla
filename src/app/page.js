import BtnMain from "@/components/Btn/button";
import Header from "@/components/Header/header";
import SectionFront from "@/components/Section-Front";
import SectionHero from "@/components/Section-Hero";
import SectionIdeasTransform from "@/components/Section-Ideas";
import SectionNewsLetter from "@/components/Section-News";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionIdeasTransform />
      <SectionFront />
      <SectionNewsLetter />
    </>
  );
}
