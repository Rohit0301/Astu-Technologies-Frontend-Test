import React from 'react'
import ListingTable from './ListingTable'
import styles from '../styles/listingcard.module.css'
import { Box } from '@mui/material'
export default function ListingCard() {
  return (
    <Box className={styles.card}>
     <ListingTable />
    </Box>
  )
}
