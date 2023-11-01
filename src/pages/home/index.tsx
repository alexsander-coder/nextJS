import { Heading, Text } from '@ignite-ui/react';
import Image from 'next/image';
import { Container, Hero, Preview } from './style';

import preview from '../../assets/calendar.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm';

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">Agendamento</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image src={preview}
          height={400}
          quality={100}
          priority
          alt='calendar'
        />

      </Preview>
    </Container>
  )
}