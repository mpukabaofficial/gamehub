import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaXbox,
  FaApple,
  FaAndroid,
  FaWindows,
  FaLinux,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    xbox: FaXbox,
    PlayStation: FaPlaystation,
    PC: FaWindows,
    iOS: MdPhoneIphone,
    Android: FaAndroid,
    "Apple Macintosh": FaApple,
    Linux: FaLinux,
    Web: BsGlobe,
    Nintendo: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.name]} color="gray.500" />
      ))}
    </HStack>
  );
};
export default PlatformIconList;
