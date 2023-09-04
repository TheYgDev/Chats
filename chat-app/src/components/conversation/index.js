import { Box, Stack } from "@mui/material";
import React from "react";
import Fotter from "./Fotter";
import Header from "./Header";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Header />
      {/* msg */}
      <Stack
        width={"100%"}
        sx={{ flexGrow: 1, overflow: "scroll", overflowX: "hidden",overflowY: "hidden"  }}>
        <div className="scrollbar" style={{ overflowY: "auto" }}>
          <Message />
        </div>
      </Stack>
      {/* chat Fotter */}
      <Fotter />
    </Stack>
  );
}

export default Conversation;
