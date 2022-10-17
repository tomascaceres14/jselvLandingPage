import React from "react";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import "./Appointment.css";

const Reserva = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh

    const newDate = date.$d.toLocaleString(); // Formatting date to "DD/MM/YYYY HH:mm"
    const message = `Hola+Juli%21+Mi+nombre+es+${firstName}+${lastName}+y+quisiera+reservar+un+turno+para+el+${newDate}`; // Create presonalized message
    const URL = `https://wa.me/543492383044?text=` + message;

    window.open(URL, "_blank");
    // window.location.href = "/";
  };

  return (
    <section className="turno-container" id="appointment">
      <h2 className="h2-title">Reserva tu turno!</h2>
      <form className="turno-form" onSubmit={handleSubmit}>
        <div className="form-input">
          <TextField
            label="Nombre"
            variant="outlined"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Apellido"
            variant="outlined"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Correo Electronico"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Fecha y hora deseada"
            value={date}
            inputFormat="DD/MM/YYYY HH:mm"
            disablePast={true}
            minDate={dayjs("2022-10-14")}
            minTime={dayjs("2022-02-14T08:00")}
            maxTime={dayjs("2022-02-14T20:30")}
            onChange={(newValue) => {
              setDate(newValue);
            }}
          />
        </LocalizationProvider>
        <button type="submit" className="submit-bttn">
          <WhatsAppIcon className="wpp-logo" />
        </button>
      </form>
    </section>
  );
};

export default Reserva;
