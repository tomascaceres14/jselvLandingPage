import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InicioIcon from "@mui/icons-material/House";
import SobreMiIcon from "@mui/icons-material/Javascript";
import TurnoIcon from "@mui/icons-material/HourglassTop";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LoginIcon from "@mui/icons-material/Login";
import Modal from "../Modal/Modal";

import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.css";

const icons = [
  { title: "Inicio", icon: InicioIcon, href: "#" },
  { title: "Sobre mi", icon: SobreMiIcon, href: "#about" },
  {
    title: "Preguntas frecuentes",
    icon: QuestionMarkIcon,

    href: "#faq",
  },
  {
    title: "Saca un turno!",
    icon: TurnoIcon,
    route: "/reserva",
    href: "#appointment",
  },
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {icons.map((icon) => (
          <a to={icon.route} key={icon.title} href={icon.href}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#f14d59" }}>
                  <icon.icon />
                </ListItemIcon>
                <ListItemText
                  primary={icon.title}
                  sx={{ color: "#f14d59", fontWeight: "700" }}
                />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "lightgrey" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            {/* <ListItemIcon sx={{ color: "#f14d59" }}>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Iniciar sesión"}
              sx={{ color: "#f14d59" }}
            /> */}
            <Modal />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", true)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </nav>
  );
}
