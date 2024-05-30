import Link from "next/link";
import Container from "../Container/container";
import Image from "next/image";
import Logo from "@/assets/logo.svg"
import BtnMain from "../Btn/button";
import { HeaderStyle, HeaderContainer, NavHeader } from "./style.css";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className={HeaderStyle}>
            <Container className={HeaderContainer}>
                <Link href="/" title="Página inicial">
                    <Image src={Logo} alt="Logo Structureboost" />
                </Link>
                    <nav className={NavHeader}>
                        <Navigation />
                        <BtnMain variant="default" label="Entre em contato" url="#" title="Entre em contato" />              
                    </nav>
            </Container>
        </header>
    )
}