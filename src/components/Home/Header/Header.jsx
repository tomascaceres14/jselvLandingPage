import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "./Drawer/Drawer";
import "./Header.css"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 0.5 }} className="header">
      <AppBar position="static" className="header">
        <Toolbar>
          <Drawer sx={{ flexGrow: 1 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Juli Selvaggi Nutricion
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
