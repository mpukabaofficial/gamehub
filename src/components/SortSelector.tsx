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

const SortSelector = () => {
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
          <Text mr={2}>Order by relevance</Text>
        </Flex>
      </MenuButton>
      <MenuList bg="gray.700" color="white">
        <MenuItem _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600" }}>
          Relevance
        </MenuItem>
        <MenuItem _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600" }}>
          Date Added
        </MenuItem>
        <MenuItem _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600" }}>
          Name
        </MenuItem>
        <MenuItem _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600" }}>
          Release Date
        </MenuItem>
        <MenuItem _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600" }}>
          Popularity
        </MenuItem>
        <MenuItem _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600" }}>
          Average Rating
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
