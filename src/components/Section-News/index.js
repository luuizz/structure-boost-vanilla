import BtnMain from "../Btn/button";
import { StyleSectionNewsletter } from "./style.css";

export default function SectionNewsLetter() {
    return (
      <section className={StyleSectionNewsletter}>
          <div className="container">
              <h2>Front-end descomplicado e direto ao ponto!</h2>
              <p>Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
              <BtnMain 
              url="/contato" 
              title="Preencher formulário"
              variant="white"
              >Fazer parte da lista de espera</BtnMain>
          </div>
      </section>
    )
  }