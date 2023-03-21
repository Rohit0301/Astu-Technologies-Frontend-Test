import { Box } from "@mui/material";
import React, { useState } from "react";
import { SelectField, TextField } from "../../../components/forms";
import { userRoleData } from "../../../constants/InviteCoWorkers";
import styles from "../styles/detailsform.module.css";

export default function CoWorkerDetailsForm() {
  const [data, setState] = useState({ email: "", role: "select" });
  const handleInputChange = (event) => {
    setState({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box className={styles.formContainer}>
      <TextField
        placeholder='Email'
        onChange={handleInputChange}
        name='email'
        value={data.email}
      />
      <SelectField
        data={userRoleData}
        onChange={handleInputChange}
        name='role'
        value={data.role}
      />
    </Box>
  );
}
