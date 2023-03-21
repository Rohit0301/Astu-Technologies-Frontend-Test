import { Box } from "@mui/material";
import React, { useState } from "react";
import { SelectField } from "../../../components/forms";
import { userRoleData } from "../../../constants/InviteCoWorkers";
import styles from "../styles/listingtable.module.css";

export default function TableSelectRole({ value }) {
  const [data, setState] = useState({ role: value });
  const handleInputChange = (event) => {
    setState({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box className={styles.formContainer}>
      <SelectField
        data={userRoleData}
        onChange={handleInputChange}
        name='role'
        value={data.role}
      />
    </Box>
  );
}
