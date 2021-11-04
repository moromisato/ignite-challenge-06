import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image
            src={imgUrl}
            alt={imgUrl}
            objectFit="cover"
            w="max"
            maxW="900px"
            maxH="600px"
            borderTopRadius="md"
          />
        </ModalBody>

        <ModalFooter>
          <Link href={imgUrl}>
            <Text>Abrir original</Text>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
