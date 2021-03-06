import React from 'react'
import { css, cx } from '@emotion/css'

const absFill = css`
  position: absolute;
  width: 100%;
  height: 100%;
`

export default function ErrorImg ({ show }) {
  if (!show) return null

  const errorImg = css`
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
  `

  return (
    <div className={cx(absFill, errorImg)}>The image could not be loaded</div>
  )
}
