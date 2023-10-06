import { Box, Image, Text } from "@chakra-ui/react";

import React from "react";

const StatusBar = () => {
  return (
    <Box w="390px" bg="#515151" color="white" padding="20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontWeight="500">9:41</Text>
        </Box>
        <Box display="flex" gap="3px">
          <Image src={"./Cellular.png"} />
          <Image src={"./Wifi.png"} />
          <Image src={"./Battery.png"} />
        </Box>
      </Box>
    </Box>
  );
};

export default StatusBar;
