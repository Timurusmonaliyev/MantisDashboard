import { Box, Card } from "@mui/material";
import React from "react";
function Cards() {
  return (
    <div>
      <p className="font-medium">Dashboard</p>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          justifyItems: "center",
          gap: "2%",
        }}
        className="grid"
      >
        <Card style={{ width: "100%", padding: "14px" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "1%",
              gap: "10px",
            }}
          >
            4,42,236
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                fontWeight: "medium",
                textAlign: "center",
                borderRadius: "7px",
                background: "#1677ff",
                color: "white",
                width: "75px",
                height: "24px",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>
              this year
            </span>
          </p>
        </Card>
        <Card style={{ width: "100%", padding: "14px" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "1%",
              gap: "10px",
            }}
          >
            4,42,236
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                fontWeight: "medium",
                textAlign: "center",
                borderRadius: "7px",
                background: "#1677ff",
                color: "white",
                width: "75px",
                height: "24px",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677FF" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
        <Card style={{ width: "100%", padding: "14px" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "1%",
              gap: "10px",
            }}
          >
            4,42,236
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                fontWeight: "medium",
                textAlign: "center",
                borderRadius: "7px",
                background: "#faad14",
                color: "white",
                width: "75px",
                height: "24px",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#faad14" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
        <Card style={{ width: "100%", padding: "14px" }} className="cards">
          <p style={{ fontSize: "14px", color: "#8c8c8c" }}>Total Page Views</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "1%",
              gap: "10px",
            }}
          >
            4,42,236
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                fontWeight: "medium",
                textAlign: "center",
                borderRadius: "7px",
                background: "#faad14",
                color: "white",
                width: "75px",
                height: "24px",
              }}
            >
              59.3%
            </p>
          </Box>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontSize: "12px" }}>
              You made an extra <span style={{ color: "#1677F" }}>35,000</span>{" "}
              this year
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
