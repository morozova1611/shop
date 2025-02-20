import React from 'react'
import styles from './Button.module.css'
import { Button as ButtonMUI } from '@mui/material'
import cn from 'classnames'


const Button = ({ variant = 'contained', size = 'medium', children, className, onClick, disabled }) => {
  return (
    <ButtonMUI
      variant={variant}
      size={size}
      className={cn(styles.btn, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonMUI>
  )
}

export default Button