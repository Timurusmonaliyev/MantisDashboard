import {
  Code,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

function Cards() {
  return (
    <div>
      <p>Dashboard</p>
      <br />
      <div
      className="flex lg:grid lg:grid-cols-2 xl:flex"
      >
        <Stat
          border={"1px solid"}
          width={"222px"}
          height={"154px"}
          rounded={"lg"}
          padding={"5%"}
        >
          <StatLabel>Total Page Views</StatLabel>
          <StatNumber
            style={{ display: "flex", alignItems: "center" }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <Code
              height={"24px"}
              width={"75px"}
              background={"#1677FF"}
              textAlign={"center"}
              rounded={"md"}
              color={"white"}
              fontWeight={"medium"}
              fontSize={"13px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              59.3%
            </Code>
          </StatNumber>
          <StatHelpText>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </StatHelpText>
        </Stat>
        <Stat
          border={"1px solid"}
          width={"222px"}
          height={"154px"}
          rounded={"lg"}
          padding={"5%"}
        >
          <StatLabel>Total Page Views</StatLabel>
          <StatNumber
            style={{ display: "flex", alignItems: "center" }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <Code
              height={"24px"}
              width={"75px"}
              background={"#1677FF"}
              textAlign={"center"}
              rounded={"md"}
              color={"white"}
              fontWeight={"medium"}
              fontSize={"13px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              59.3%
            </Code>
          </StatNumber>
          <StatHelpText>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </StatHelpText>
        </Stat>
        <Stat
          border={"1px solid"}
          width={"222px"}
          height={"154px"}
          rounded={"lg"}
          padding={"5%"}
        >
          <StatLabel>Total Page Views</StatLabel>
          <StatNumber
            style={{ display: "flex", alignItems: "center" }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <Code
              height={"24px"}
              width={"75px"}
              background={"#1677FF"}
              textAlign={"center"}
              rounded={"md"}
              color={"white"}
              fontWeight={"medium"}
              fontSize={"13px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              59.3%
            </Code>
          </StatNumber>
          <StatHelpText>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </StatHelpText>
        </Stat>
        <Stat
          border={"1px solid"}
          width={"222px"}
          height={"154px"}
          rounded={"lg"}
          padding={"5%"}
        >
          <StatLabel>Total Page Views</StatLabel>
          <StatNumber
            style={{ display: "flex", alignItems: "center" }}
            gap={"5%"}
            fontSize={"20px"}
            marginTop={"1%"}
          >
            4,42,236
            <Code
              height={"24px"}
              width={"75px"}
              background={"#1677FF"}
              textAlign={"center"}
              rounded={"md"}
              color={"white"}
              fontWeight={"medium"}
              fontSize={"13px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              59.3%
            </Code>
          </StatNumber>
          <StatHelpText>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </StatHelpText>
        </Stat>
      </div>
    </div>
  );
}

export default Cards;
