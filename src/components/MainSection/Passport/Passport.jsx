import {
  Box,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";

const Passport = () => {
  const localName = localStorage.getItem("name");
  const localImage = localStorage.getItem("image");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState(localName);
  const [saveName, setSaveName] = useState(localName);
  const [imgSrc, setImgSrc] = useState(localImage);
  const [saveImgSrc, setSaveImgSrc] = useState(localImage);
  console.log(localImage);

  const webcamRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value.replace(/[^a-z ]/gi, ""));
  };

  const handleSave = () => {
    if (name.length < 30) {
      setSaveImgSrc(imgSrc);
      setSaveName(name);
      onClose();
    }
    if (imgSrc !== null) {
      localStorage.setItem("image", imgSrc);
    }
    localStorage.setItem("name", name);
  };

  const handleClostBtn = () => {
    onClose();
    setImgSrc(null);
    if (saveName === "") {
      setName("");
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    const imageSrc = null;
    setImgSrc(imageSrc);
    setSaveImgSrc(imageSrc);
    localStorage.removeItem("image");
  };

  const captureImage = () => {
    html2canvas(document.body).then(function (canvas) {
      var a = document.createElement("a");
      a.href = canvas
        .toDataURL("../assets/image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "Passport.jpg";
      a.click();
    });
  };

  return (
    <Box backgroundImage={"url('./background.png')"} h="545px">
      <Box
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          bgImage={"url('./MyPassport.png')"}
          display={"flex"}
          justifyContent={"center"}
          w="172px"
          h="245px"
          backgroundSize="contain"
          backgroundRepeat={"no-repeat"}
          alignSelf={"flex-start"}
          ml="20px"
          cursor={"pointer"}
        ></Box>
        <Box
          display={"flex"}
          bg="linear-gradient(181deg, #FFF 0.71%, #FAFAFA 21.24%, #EBEBEB 61.81%, #E1E1E1 83.37%, #929292 99.29%)"
          borderRadius="25px 25px 2px 2px"
          p="30px"
          gap="20px"
          w="78%"
          transform={"rotate(13deg)"}
          mt="-150px"
          ml="60px"
          boxShadow={"0px -4px 2px 0px rgba(63, 63, 63, 0.50)"}
        >
          <Box
            bg={saveImgSrc ? `url('${saveImgSrc}')` : `gray`}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            minWidth="92px"
            h="108px"
            border="2px solid #021689"
            borderRadius="10px"
            boxShadow={"2px 2px 0 #0384C3"}
            position={"relative"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            {/* Modal */}

            <Modal isOpen={isOpen} onClose={onClose} size="sm">
              <ModalOverlay />
              <ModalContent>
                <Box
                  h="600px"
                  bg="white"
                  borderRadius="23px"
                  p="18px"
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Box
                    w="314px"
                    h="365px"
                    bg="#343434"
                    border="3px dashed #AFAFAF"
                    position={"relative"}
                    mb="26px"
                  >
                    <Box
                      position={"absolute"}
                      zIndex={1}
                      right="5px"
                      top="5px"
                      cursor={"pointer"}
                      onClick={() => handleClostBtn()}
                    >
                      <Image src="./CloseBtn.png" />
                    </Box>
                    <Box
                      position={"absolute"}
                      zIndex={1}
                      left={"50%"}
                      bottom={"20px"}
                      transform={"translate(-50%, 0)"}
                      cursor={"pointer"}
                    >
                      {imgSrc || saveImgSrc ? (
                        <Image src="./RetakeBtn.png" onClick={retake} />
                      ) : (
                        <Image src="./ShutterBtn.png" onClick={capture} />
                      )}
                    </Box>
                    <Box h="350px" position={"absolute"} zIndex={0}>
                      {imgSrc || saveImgSrc ? (
                        <Image
                          src={imgSrc ? imgSrc : saveImgSrc}
                          alt="webcam"
                        />
                      ) : (
                        <Webcam
                          screenshotFormat="image/jpeg"
                          videoConstraints={{
                            height: { min: "366" },
                            width: { max: "314" },
                          }}
                          ref={webcamRef}
                        />
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Input
                      type="text"
                      size="lg"
                      placeholder="Enter your first name"
                      onChange={(e) => handleChange(e)}
                      bg="#CFCFCF"
                      boxShadow={"2px 2px 1px 0px rgba(0, 0, 0, 0.25) inset"}
                      mb="21px"
                      value={name || ""}
                      textAlign={"center"}
                      name="name"
                      fontFamily={"Hobeaux Black"}
                      _placeholder={{
                        fontFamily: "Hobeaux Black",
                        color: "#979797",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    />
                  </Box>
                  <Box
                    as="button"
                    fontSize="36px"
                    fontFamily={"Hobeaux Black"}
                    color="white"
                    bg="#A1A1A1"
                    p="10px 40px"
                    borderRadius={"12px"}
                    border="5px solid #FFF"
                    boxShadow={"0px 4px 0px 0px rgba(0, 0, 0, 0.25)"}
                    onClick={handleSave}
                  >
                    Save
                  </Box>
                </Box>
              </ModalContent>
            </Modal>

            {/* Modal */}
            <Box
              position={"absolute"}
              right="-10%"
              top="-7%"
              cursor={"pointer"}
            >
              <Image src={"./EditBtn1.png"} w="19px" />
            </Box>
          </Box>
          <Box>
            <Text
              color="#021689"
              fontSize="15px"
              fontWeight={"700"}
              fontFamily={"bebas neue"}
            >
              NAME
            </Text>
            <Text
              fontFamily={"Hobeaux Black"}
              fontSize={"25px"}
              fontWeight={"900px"}
              color={"#0394C3"}
              lineHeight={"120%"}
              textShadow={"2px 2px 0px #021689"}
            >
              {saveName ? saveName : "NAME"}
            </Text>
            <Text
              fontFamily={"Hobeaux Black"}
              fontSize={"11px"}
              fontWeight={"900"}
              color="#FAEA18"
              textShadow={"2px 2px 0px #0C94C3"}
              lineHeight={"150%"}
            >
              I'M READY TO DISCOVER THE WORLD!
            </Text>
          </Box>
        </Box>
        <Box
          bg={
            "linear-gradient(0deg, #FFF 0.71%, #FAFAFA 21.24%, #EBEBEB 61.81%, #E1E1E1 83.37%, #979797 94.29%)"
          }
          p="15px 20px"
          w="78%"
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          transform={"rotate(13deg)"}
          borderRadius={"2px 2px 25px 25px"}
          ml="-27px"
          mt="-6px"
          boxShadow={"0px 4px 2px 0px rgba(63, 63, 63, 0.50)"}
        >
          <Text
            color={"#FAEA18"}
            textShadow={"2px 2px 0 #021689"}
            fontFamily="Hobeaux Black"
            fontSize={"20px"}
            fontWeight={"900"}
            letterSpacing={"0.7px"}
            textAlign={"center"}
            mb="10px"
          >
            Continents Explored
          </Text>
          <Box
            display="flex"
            h="150px"
            w="270px"
            borderRadius={"10px"}
            bg="#0394C3"
            position={"relative"}
          >
            <Box position={"absolute"} left="50%" top="10%">
              <Box position={"relative"}>
                <Image src={"./Asia.png"} />
                <Box>
                  <Image
                    src="./Lock.png"
                    position={"absolute"}
                    top="18px"
                    left="40px"
                  />
                </Box>
              </Box>
            </Box>
            <Box position={"absolute"} left="36%" top="28%">
              <Image src={"./Africa.png"} />
              <Box>
                <Image
                  src="./Lock.png"
                  position={"absolute"}
                  top="18px"
                  left="25px"
                  w="30%"
                />
              </Box>
            </Box>
            <Box position={"absolute"} right="12%" bottom="20%">
              <Image src={"./Australia.png"} />
              <Box>
                <Image
                  src="./Lock.png"
                  position={"absolute"}
                  top="6px"
                  left="15px"
                  w="30%"
                />
              </Box>
            </Box>
            <Box position={"absolute"} left="5%" top="10%">
              <Image src={"./NorthAmerica.png"} />
              <Box>
                <Image
                  src="./CheckMark.png"
                  position={"absolute"}
                  top="15px"
                  left="25px"
                />
              </Box>
            </Box>
            <Box position={"absolute"} left="17%" bottom="10%">
              <Image src={"./SouthAmerica.png"} />
              <Box>
                <Image
                  src="./CheckMark.png"
                  position={"absolute"}
                  top="17px"
                  left="12px"
                />
              </Box>
            </Box>
            <Box position={"absolute"} left="40%" top="10%">
              <Image src={"./Europe.png"} />
              <Box>
                <Image
                  src="./CheckMark.png"
                  position={"absolute"}
                  top="10px"
                  left="27px"
                  w="22%"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        ml="10px"
        mt="10px"
        cursor={"pointer"}
        alignSelf={"flex-start"}
        w="40"
        onClick={() => captureImage()}
      >
        <Image src="./Download.png" />
      </Box>
    </Box>
  );
};

export default Passport;
