import Image from 'next/image'
import IconImageGeneric from "@/assets/icon-imgframe.svg"
import { CardPostStyle, tagStyle } from './style.css'
 
export default function CardPost({tag, title, text }) {
  return (
    <>
        <div className={CardPostStyle}>
            <span className={tagStyle}>{tag}</span>
            <div className='image'>
                <Image src={IconImageGeneric} alt='Placeholder de uma imagem'/>
            </div>

            <div className='text'>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    </>
  )
}
