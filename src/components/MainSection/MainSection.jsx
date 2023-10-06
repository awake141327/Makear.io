import { Box } from "@chakra-ui/react";

import React from "react";

import LogoImageHeader from "./LogoImageHeader/LogoImageHeader";
import Passport from "./Passport/Passport";

const MainSection = () => {
  return (
    <Box bg="#FAEA18" w="390px" h="668px">
      <LogoImageHeader />
      <Passport />
    </Box>
  );
};

export default MainSection;
