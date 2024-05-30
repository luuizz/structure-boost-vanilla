import Image from "next/image";
import BtnMain from "../Btn/button";
import Container from "../Container/container";
import { ContainerHeroStyle, ContentStyle, IllustraHeroDesk, StyleSectionHero, TextHero, TitleHero } from "./style.css";
import IllustrationDesk from "@/assets/hero-img-desktop.svg"

export default function SectionHero() {
    return (
        <>
            <section className={StyleSectionHero}>
                <Container className={ContainerHeroStyle}>
                    <div className={ContentStyle}>
                        <h1 className={TitleHero}>Front-end descomplicado e direto ao ponto!</h1>
                        <p className={TextHero}>Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
                        <BtnMain variant="lg" label="Fazer parte da lista de espera" title="Entre em contato" url="#" />
                    </div>
                </Container>
                <Image 
                className={IllustraHeroDesk} 
                src={IllustrationDesk} 
                alt="Illustração"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                />
            </section>
        </>
    )
}