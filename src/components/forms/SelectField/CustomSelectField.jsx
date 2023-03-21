import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem, Select } from "@mui/material";
import styles from "./styles.module.css";
export default function CustomSelectField(props) {
  const { data, ...restProps } = props;
  return (
    <Select
      className={restProps.value === "select" ? styles.default : styles.select}
      IconComponent={KeyboardArrowDownIcon}
      {...restProps}
    >
      <MenuItem key={0} value='select' disabled>
        Select
      </MenuItem>
      {data.map((item) => (
        <MenuItem key={item.id} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
