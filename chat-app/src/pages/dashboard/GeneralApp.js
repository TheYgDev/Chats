import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import Content from "../../components/content";
import Conversation from "../../components/conversation";
import Chats from "./Chats";
import StarredMessages from "../../components/StarredMassages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation></Conversation>
      </Box>
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Content />;
            case "STARRED":
              return <StarredMessages/>
            case "SHARED":
              return <SharedMessages />;

            default:
            // do something
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
