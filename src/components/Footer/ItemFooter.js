import { footerDataLinks } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { ItemNavFooter } from "./style.css";

export default function ItemFooter() {
  return (
    <>
    {
        footerDataLinks.map((item, index) => (
            <div key={index} className={`${ItemNavFooter} item-nav`}>
                <h6>{item.title}</h6>
                <ul>
                    {item.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                        <Link href={link.href}>
                            {link.icon && <Image src={link.icon} alt={link.alt} />}
                            {link.label}
                        </Link>
                    </li>
                    ))
                }
                </ul>
        </div>
    ))
    }
    </>
  )
}
