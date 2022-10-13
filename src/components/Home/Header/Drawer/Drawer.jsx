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
import RegisterIcon from "@mui/icons-material/Create";
import "./Drawer.css";
import { Link } from "react-router-dom";

const icons = [
  { title: "Inicio", icon: InicioIcon, href: "#" },
  { title: "Sobre mi", icon: SobreMiIcon, href: "#about" },
  {
    title: "Preguntas frecuentes",
    icon: QuestionMarkIcon,
    
    href: "#faq",
  },
  { title: "Saca un turno!", icon: TurnoIcon, route: "/reserva", href: "#" },
];

const segundoMenu = [
  { title: "Registrarse", icon: RegisterIcon, route: "/register" },
  { title: "Iniciar sesión", icon: LoginIcon, route: "/login" },
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {icons.map((icon) => (
          <a to={icon.route} key={icon.title} href={icon.href}>
            <Link to={icon.route}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <icon.icon />
                  </ListItemIcon>
                  <ListItemText primary={icon.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        {segundoMenu.map((icon) => (
          <Link to={icon.route} key={icon.title}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <icon.icon />
                </ListItemIcon>
                <ListItemText primary={icon.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <img
            src={require("../../../../images/hamburger.png")}
            className="header-menu"
            alt="toggle-menu"
          />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </nav>
  );
}
