import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import InicioIcon from "@mui/icons-material/House";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Face3Icon from "@mui/icons-material/Face3";
import TurnoIcon from "@mui/icons-material/HourglassTop";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const icons = [
  { title: "Inicio", icon: InicioIcon, href: "#" },
  { title: "Mis planes", icon: Face3Icon, href: "#about" },
  {
    title: "Reservar turno",
    icon: TurnoIcon,
    route: "/reserva",
    href: "#appointment",
  },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {icons.map((icon) => (
          <ListItem key={icon.title} disablePadding>
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
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#f14d59" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Cerrar sesion"}
              sx={{ color: "#f14d59", fontWeight: "700" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#f14d59",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Bienvenido Usuario!
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph>
            El motivo de este menu es que el usuario pueda visualizar los planes
            alimenticios asignados a el.
          </Typography>
          <Typography paragraph>
            Todavia falta definir bien como se visualizara el plan y que va a
            contener cada uno. Para eso es necesario que la profesional en la
            cual se inspiro esta pagina web se organice de una vez y planeemos
            una reunion en la cual definir bien las necesidades. La perdonamos
            porque entendemos que anda con mil cosas y es medio despistada. Pero
            dale Juliana media pila :P
          </Typography>
        </Box>
      </Box>
  );
}

export default ResponsiveDrawer;
