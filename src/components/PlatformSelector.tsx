import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        minWidth="200px"
        bg="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
      >
        <Flex align="center">
          <Text mr={2}>{selectedPlatform?.name || "Select Platform"}</Text>
        </Flex>
      </MenuButton>
      <MenuList bg="gray.700" color="white">
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
            _hover={{ bg: "gray.600" }}
            _focus={{ bg: "gray.600" }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
