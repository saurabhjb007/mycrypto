import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={4} bgColor={"blackAlpha.900"}>
      <Button mx={4} variant={"unstyled"} color={"white"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button mx={4} variant={"unstyled"} color={"white"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button mx={4} variant={"unstyled"} color={"white"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
