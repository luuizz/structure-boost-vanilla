import Image from 'next/image'
import Link from 'next/link'
import LogoStructBoost from "@/assets/logo.svg"
import ItemFooter from './ItemFooter'
import { StyleFooter } from './style.css'

export default function Footer() {
  return (
    <footer className={StyleFooter}>
        <div className="container">
            <div className="main-area">
                <div className="left">
                    <Link href="/" title='Ir para página inicial'>
                        <Image src={LogoStructBoost} alt='Logo Structboost' />
                    </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
                </div>

                <div className="right">
                    <ItemFooter />
                </div>
            </div>

            <p className="copy">
                2023 © Todos os direitos reservados. <strong>Codeboost</strong>
            </p>
        </div>
    </footer>
  )
}
