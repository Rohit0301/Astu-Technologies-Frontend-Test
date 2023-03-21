import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { cardTitle } from "../../../constants/InviteCoWorkers";
import { generateKey } from "../../../utils/generateKey";
import styles from "../styles/invitecard.module.css";
import CoWorkerDetailsForm from "./CoWorkerDetailsForm";
import InformationIcon from "./InformationIcon";

export default function InviteCard() {
  return (
    <Box className={styles.card}>
      <Typography className={styles.subtitle} variant='subtitle1'>
        {cardTitle}
      </Typography>
      <InformationIcon />
      {[...new Array(2)].map(() => (
        <CoWorkerDetailsForm key={generateKey()} />
      ))}
      <Box className={styles.btnContainer}>
        <Button variant='text' className={styles.btnText}>
          +Add more
        </Button>
        <Button variant='contained' className={styles.btnContained}>
          Send Invite
        </Button>
      </Box>
    </Box>
  );
}
