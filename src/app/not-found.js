import BtnMain from '@/components/Btn/button'
import Container from '@/components/Container/container'
import Generic from '@/components/Generic/generic'
import React from 'react'

export default function NotFound() {
  return (
    <>
        <Generic>
            <Container>
                <h1 style={{marginBottom: '4rem'}}>Página não encontrada</h1>
                <BtnMain title="Voltar para página inicial" label="Voltar para página inicial" url="/" variant="white lg" />
            </Container>
        </Generic>
    </>
  )
}
