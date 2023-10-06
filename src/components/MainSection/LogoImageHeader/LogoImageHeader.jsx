import { Box, Image } from "@chakra-ui/react";

import React from "react";

const LogoImageHeader = () => {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      mt="17px"
      px="16px"
    >
      <Box cursor={"pointer"}>
        <Image src={"./MilkyBarLogo.png"} />
      </Box>
      <Box display={"flex"} gap="12px">
        <Box
          w="51px"
          h="51px"
          p="9px"
          borderRadius="7px"
          border={"1px solid #021689"}
          boxShadow={"2px 2px 0px 0px #0394C3"}
          cursor={"pointer"}
        >
          <Image src={"./TreasureChest.png"} />
        </Box>
        <Box
          w="51px"
          h="51px"
          p="9px"
          borderRadius="7px"
          border={"1px solid #021689"}
          boxShadow={"2px 2px 0px 0px #0394C3"}
          cursor={"pointer"}
        >
          <Image src={"./Home.png"} />
        </Box>
      </Box>
    </Box>
  );
};

export default LogoImageHeader;
