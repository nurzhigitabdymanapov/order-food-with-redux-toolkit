import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const Snackbarrr = ({ handleClose }) => {
  const { open, severity, message } = useSelector((state) => state.snackbar);
  console.log(open);
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity} 
          sx={{ width: "100%", right: '0' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
