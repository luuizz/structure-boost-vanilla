"use client"
import Link from "next/link";
import Container from "../Container/container";
import Image from "next/image";
import Logo from "@/assets/logo.svg"
import BtnMain from "../Btn/button";
import { HeaderStyle, HeaderContainer, NavHeader, asideMenuStyle } from "./style.css";
import Navigation from "./Navigation";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

export default function Header() {

    const [isOpen, setOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setFixed(true)
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header className={`${HeaderStyle} ${isFixed ? 'fixed' : ''}`}>
            <Container className={`${HeaderContainer} container`}>
                <Link href="/" title="Página inicial">
                    <Image src={Logo} alt="Logo Structureboost" />
                </Link>
                    <nav className={NavHeader}>
                        <Navigation />
                        <BtnMain variant="default" url="/contato" title="Entre em contato">Entre em contato</BtnMain>
                    </nav>
                    <Hamburger label="Mostrar menu" toggled={isOpen} toggle={setOpen} />    
            </Container>

            <aside className={`${asideMenuStyle} ${isOpen ? 'open' : ''} ${isFixed ? 'fixed' : ''}`}>
                <div className="container">
                    <nav>
                        <Navigation closeMenu={closeMenu} />
                        <BtnMain variant="default" url="/contato" title="Entre em contato">Entre em contato</BtnMain>
                    </nav>
                </div>
        </aside>
        </header>
    )
}