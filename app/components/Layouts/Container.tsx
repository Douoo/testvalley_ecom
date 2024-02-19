import React from 'react'
import style from './Container.module.css'

export default function Container({children, className}: Readonly<{
    children: React.ReactNode;
    className?: string;
  }>) {
  return (
    <div className={`${style.container} ${className}`}>{children}</div>
  )
}
