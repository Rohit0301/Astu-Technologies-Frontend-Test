import { TextField } from '@mui/material'
import React from 'react'
import styles from './styles.module.css';
export default function CustomTextField(props) {
  return (
    <TextField variant="outlined" className={styles.textfield} {...props} />
  )
}
