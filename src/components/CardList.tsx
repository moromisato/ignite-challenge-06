import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="40px" w="100%">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => console.log('view image')}
          />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
