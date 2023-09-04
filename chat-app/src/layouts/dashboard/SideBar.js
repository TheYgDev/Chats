import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

function SideBar() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

    return ( 
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 0px 2px",
            height: "100vh",
            width: 100,
          }}
        >
          <Stack
            spacing={3}
            direction="column"
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ height: "100%" }}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                }}
              >
                <img src={Logo} alt="Chat app Logo"></img>
              </Box>
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                alignItems="center"
                spacing={3}
              >
                {Nav_Buttons.map((el) =>
                  el.index === selected ? (
                    <Box
                      p={1}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#fff" }}
                        key={el.index}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => {
                        setSelected(el.index);
                      }}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light"
                            ? "#000"
                            : theme.palette.text.primary,
                      }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  )
                )}
                <Divider sx={{ width: "48px" }} />
                {selected === 3 ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    onClick={() => {
                      setSelected(3);
                    }}
                  >
                    <Gear />
                  </IconButton>
                )}
              </Stack>
            </Stack>

            <Stack spacing={4}>
              <AntSwitch
                onChange={() => {
                  onToggleMode();
                }}
                defaultChecked
              />
              <Avatar src={faker.image.avatar()} />
            </Stack>
          </Stack>
        </Box>
     );
}

export default SideBar ;