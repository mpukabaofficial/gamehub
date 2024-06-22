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

interface Props {
  onSelectedSort: (sort: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectedSort, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((sort) => sort.value === sortOrder);
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
          <Text mr={2}>Order by: {currentSortOrder?.label || "Relevance"}</Text>
        </Flex>
      </MenuButton>
      <MenuList bg="gray.700" color="white">
        {sortOrders.map((sortOrder) => (
          <MenuItem
            _hover={{ bg: "gray.600" }}
            key={sortOrder.value}
            _focus={{ bg: "gray.600" }}
            value={sortOrder.value}
            onClick={() => onSelectedSort(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
