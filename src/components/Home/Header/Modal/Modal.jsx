import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Login from "../../Validations/Login/Login";
import Register from "../../Validations/Register/Register";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        Iniciar Sesion
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {toggle ? <Login /> : <Register />}
          {toggle ? (
            <span>
              No tienes cuenta?
              <button onClick={() => setToggle(!toggle)}>Registrate</button>
            </span>
          ) : (
            <span>
              ya tienes cuenta?
              <button onClick={() => setToggle(!toggle)}>Iniciar Sesion</button>
            </span>
          )}
        </Box>
      </Modal>
    </div>
  );
}
