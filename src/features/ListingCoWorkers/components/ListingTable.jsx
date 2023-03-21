import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import styles from "../styles/listingtable.module.css";
import {
  listingTableColumns,
  coWorkersData,
  deleteTooltip,
  resendInviteTooltip,
  pendingStatus
} from "../../../constants/ListingCoWorkers";
import TableSelectRole from "./TableSelectRole";

export default function ListingTable() {
  return (
    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          {listingTableColumns.map((col) => (
            <TableCell
              key={col.id}
              className={styles.noBorder}
              align='left'
              sx={{ width: col.width, pb: 4 }}
            >
              {col.name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {coWorkersData.map((data) => (
          <TableRow key={data.id}>
            <TableCell className={styles.noBorder} align='left'>
              <Typography
                variant='subtitle2'
                className={data.isOwner ? styles.ownerRole : styles.adminRole}
              >
                {data.email}
              </Typography>
            </TableCell>
            <TableCell className={styles.noBorder} align='left'>
              {data.isOwner ? (
                <Typography variant='subtitle2' className={styles.ownerRole}>
                  Owner
                </Typography>
              ) : (
                <TableSelectRole value={data.role} />
              )}
            </TableCell>
            <TableCell className={styles.noBorder}>
              {!data.isOwner && (
                <Tooltip title={deleteTooltip} placement='bottom-start'>
                  <IconButton className={styles.tableIconsBtn}>
                    <DeleteOutlineOutlinedIcon className={styles.tableIcons} />
                  </IconButton>
                </Tooltip>
              )}
            </TableCell>
            <TableCell className={styles.noBorder}>
              {data.status === pendingStatus && (
                <Tooltip title={resendInviteTooltip} placement='bottom-start'>
                  <IconButton className={styles.tableIconsBtn}>
                    <RefreshOutlinedIcon className={styles.tableIcons} />
                  </IconButton>
                </Tooltip>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
