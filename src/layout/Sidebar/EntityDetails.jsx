import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles.module.css";
import { entityLogo, entityName, entityWebsite } from "../../constants/Sidebar";
export default function EntityDetails() {
  return (
    <Box className={styles.etyCard}>
      <Box className={styles.etyLeft}>
        <Box className={styles.etyLogo}>
          <Typography className={styles.etyLogoText} variant='subtitle1'>
            {entityLogo}
          </Typography>
        </Box>
        <Box>
          <Typography className={styles.etyName} variant='subtitle1'>
            {entityName}
          </Typography>
          <Typography className={styles.etyWebsite} variant='subtitle2'>
            {entityWebsite}
          </Typography>
        </Box>
      </Box>
      <IconButton className={styles.iconBtn}>
        <KeyboardArrowRightIcon className={styles.iconRight} />
      </IconButton>
    </Box>
  );
}
