import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
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
      <ModalContent maxW="900px" maxH="900px">
        <ModalBody padding={0}>
          <Image
            src={imgUrl}
            alt={imgUrl}
            objectFit="contain"
            w="max"
            borderTopRadius="md"
          />
        </ModalBody>

        <ModalFooter
          justifyContent="flex-start"
          height="32px"
          bgColor="pGray.800"
          borderBottomRightRadius="md"
          borderBottomLeftRadius="md"
        >
          <Link
            mt="8px"
            mb="8px"
            href={imgUrl}
            fontSize="0.875rem"
            color="white"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
