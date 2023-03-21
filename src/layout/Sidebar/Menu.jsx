import React from "react";
import { Box, Typography, SvgIcon } from "@mui/material";
import styles from "./styles.module.css";
import { menuItemsData } from "../../constants/Sidebar";

export default function Menu() {
  return (
    <Box className={styles.menu}>
      {menuItemsData.map((item) => (
        <MenuItems key={item.id} name={item.name} logo={item.logo} />
      ))}
    </Box>
  );
}

function MenuItems({ name, logo }) {
  return (
    <Box className={styles.menuItem}>
      <SvgIcon component={logo} className={styles.menuItemLogo}></SvgIcon>
      <Typography variant='h6' className={styles.menuItemText}>
        {name}
      </Typography>
    </Box>
  );
}
