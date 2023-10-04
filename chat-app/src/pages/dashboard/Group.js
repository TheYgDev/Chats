import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React from "react";
import ChatElement from "../../components/ChatElement";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { ChatList } from "../../data";
import CreateGroup from "../../sections/main/CreateGroup";

function Group() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8faff"
                : theme.palette.backgroundColor,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography component={Link} variant="subtitle2">
                Create new Group
              </Typography>
              <IconButton onClick={()=>{setOpenDialog(true)}}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              direction="column"
              className="scrollbar"
              sx={{
                flexGrow: 1,
                height: "100%",
                overflowY: "auto",
              }}
            >
              <Stack spacing={2}>
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    Pinned
                  </Typography>
                  {/* Pinned Chat List */}
                  {ChatList.filter((el) => el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}

                  {/* Chat List */}
                  <Stack spacing={2.4}>
                    <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                      All Groups
                    </Typography>
                    {ChatList.filter((el) => !el.pinned).map((el) => {
                      return <ChatElement {...el} />;
                    })}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* Right */}
       {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  );
}

export default Group;
