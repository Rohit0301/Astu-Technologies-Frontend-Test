import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export default function Header() {
  return (
    <Box className={styles.header}>
      <IconButton className={styles.iconBtn}>
        <KeyboardArrowLeftIcon className={styles.iconLeft} />
      </IconButton>
      <Typography className={styles.title} variant='h4'>
        co-workers
      </Typography>
    </Box>
  );
}
