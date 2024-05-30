import React from 'react'
import Container from '../Container/container'
import CardDigital from './card-digital'
import { itemsCardDigital } from "@/app/data"
import { IdeaContainer, StyleSectionIdeas } from './style.css'

export default function SectionIdeasTransform() {
  return (
    <section className={StyleSectionIdeas}>
        <Container className={IdeaContainer}>
            <h3>Transformando Ideias em Realidade Digital!</h3>
            <ul>
                {
                    itemsCardDigital.map((itemCard, index) => (
                        <CardDigital 
                        key={index} 
                        srcImage={itemCard.image} 
                        altImageCard={itemCard.altImage}
                        titleCard={itemCard.title}
                        textCard={itemCard.text}
                        />
                    ))
                }
            </ul>
        </Container>
    </section>
  )
}
