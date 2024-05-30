import React from 'react'
import Container from '../Container/container'
import { itemsCardPost } from '@/app/data'
import CardPost from './CardPost'
import { AllItemsStyle, StyleSectionFront, TitleTextFront } from './style.css'

export default function SectionFront() {
  return (
    <section className={StyleSectionFront}>
        <Container>
            <div className={TitleTextFront}>
                <div className="left">
                    <h3>Domine a Arte da Front-end</h3>
                    <p>Prepare-se para criar interfaces incríveis e funcionais para a web com este curso completo de front-end.</p>
                </div>

                <div className="right">
                    <p>Junte-se a nós neste curso de front-end e embarque em uma jornada emocionante para se tornar um desenvolvedor web altamente qualificado.</p>
                </div>
            </div>

            <div className={`${AllItemsStyle} all`}>
                {
                    itemsCardPost.map((itemCard, index) => (
                        <CardPost key={index} tag={itemCard.tag} title={itemCard.title} text={itemCard.text} />
                    ))
                }
            </div>
        </Container>
    </section>
  )
}
