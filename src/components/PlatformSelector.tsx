import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton display="flex">
        Platform
        <IconButton icon={<FaChevronDown />} aria-label={"chevron down"} />
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
