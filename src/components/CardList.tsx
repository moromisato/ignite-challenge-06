import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState<string>();

  const handleViewImage = (url: string): void => {
    setSelectedImageUrl(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="40px" mb="40px" w="100%">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>
      <ModalViewImage
        isOpen={isOpen}
        imgUrl={selectedImageUrl}
        onClose={() => {
          onClose();
          setSelectedImageUrl(undefined);
        }}
      />
    </>
  );
}
