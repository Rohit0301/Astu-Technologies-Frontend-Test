import React from "react";
import { Box } from "@mui/material";
import styles from "./styles.module.css";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
export default function Layout({ children }) {
  return (
    <Box className={styles.container} sx={{ width: "100vw" }}>
      <Box xs={2} className={styles.sidebar}>
        <Sidebar />
      </Box>
      <Box xs={10} sx={{ p: 4 }} className={styles.main}>
        <Header />
        {children}
      </Box>
    </Box>
  );
}
