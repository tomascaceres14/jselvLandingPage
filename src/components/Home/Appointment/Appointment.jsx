import React from "react";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import "./Appointment.css";
import Map from "../Map/Map";

const Reserva = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh

    const newDate = date.$d.toLocaleString(); // Formatting date to "DD/MM/YYYY HH:mm"
    const message = `Hola+Juli%21+Mi+nombre+es+${firstName}+${lastName}+y+quisiera+reservar+un+turno+con+fecha%3A%20+${newDate}%2E%20Motivo+de+consulta%3A%20+${reason}`; // Create presonalized message
    const URL = `https://wa.me/543492383044?text=` + message;
    window.open(URL, "_blank");
  };

  return (
    <div>
      <section className="contact-container" id="appointment">
        <article>
          <h2 className="h2-title">Reserva tu turno!</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
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
                label="Motivo de consulta"
                variant="outlined"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
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
        </article>
        <article>
          <h2 className="h2-title">Donde estamos?</h2>
          <Map />
        </article>
      </section>
    </div>
  );
};

export default Reserva;
