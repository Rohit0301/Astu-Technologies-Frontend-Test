import { Box } from '@mui/material';
import React from 'react'
import EntityDetails from './EntityDetails';
import Menu from './Menu';
import styles from './styles.module.css';
import CashwiseLogo from '../../assets/CashwiseLogo.svg'
export default function Sidebar() {
  return (
    <Box className={styles.sidebar}>
      <img src={CashwiseLogo} className={styles.logo}/>
      <EntityDetails />
      <Menu />
    </Box>
  )
}
