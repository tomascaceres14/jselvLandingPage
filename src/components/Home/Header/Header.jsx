import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "./Drawer/Drawer";
import "./Header.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgb(255, 232, 244)",
          color: "crimson",
        }}
      >
        <Toolbar>
          <Drawer sx={{ flexGrow: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            JS Nutricionista
          </Typography>
          <Button
            color="inherit"
            sx={{ backgroundColor: "rgb(255, 174, 188)" }}
            variant="contained"
          >
            Iniciar sesión
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
