import Link from "next/link"
import { linksMenu } from "@/app/data"
import { LinksHeader, LinkStyle } from "./style.css"

export default function Navigation({ closeMenu }) {
    return (
        <ul className={LinksHeader}>
        {
            linksMenu.map((linkMenu, index) => (
                <li key={index}>
                    <Link className={LinkStyle} onClick={closeMenu} href={`/${linkMenu.link}`} title={`Ir para ${linkMenu.label}`}>
                        {linkMenu.label}
                    </Link>
                </li>
            ))
        }
    </ul>
    )
}