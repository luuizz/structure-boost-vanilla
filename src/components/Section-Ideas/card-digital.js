import Image from "next/image";
import { itemCardDigital } from "./style.css";


export default function CardDigital({ srcImage, altImageCard, titleCard, textCard }) {
    return (
      <li>
          <div className={`${itemCardDigital} item-digital`}>
              <div className="icon">
                  <Image src={srcImage} alt={altImageCard} />
              </div>
  
              <div className="info">
                  <h6>{titleCard}</h6>
                  <p>{textCard}</p>
              </div>
          </div>
      </li>
    )
  }