import { Box } from "@chakra-ui/react";

import StatusBar from "./components/StatusBar/StatusBar";
import MainSection from "./components/MainSection/MainSection";

import "./App.css";

function App() {
  return (
    <Box className="App">
      <StatusBar />
      <MainSection />
    </Box>
  );
}

export default App;
