import { IconButton, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import styles from "../styles/invitecard.module.css";
import { informationTooltip } from "../../../constants/InviteCoWorkers";
export default function InformationIcon() {
  return (
    <Tooltip    
      placement='bottom-end'
      title={informationTooltip}
    >
      <IconButton className={styles.btnInfo}>
        <InfoOutlinedIcon className={styles.iconInfo} />
      </IconButton>
    </Tooltip>
  );
}
