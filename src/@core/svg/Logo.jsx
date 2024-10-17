import React from 'react'

const Logo = props => {
  return (
    <svg width='40' height='22' viewBox='0 0 40 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      {/* Vertical line of E */}
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(-0.9 0.5 0.5 0.9 28 0)'
        fill='var(--mui-palette-primary-dark)'
      />
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(-0.9 0.5 0.5 0.9 28.5 0)'
        fill='url(#paint0_linear_448_114254)'
        fillOpacity='0.5'
      />

      {/* Top horizontal line of E */}
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(0.9 0.5 -0.5 0.9 26 0)'
        fill='var(--mui-palette-primary-dark)'
      />

      {/* Middle horizontal line of E */}
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(0.9 0.5 -0.5 0.9 18.5 0)'
        fill='var(--mui-palette-primary-dark)'
      />

      {/* Bottom horizontal line of E */}
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(0.9 0.5 -0.5 0.9 11 0)'
        fill='var(--mui-palette-primary-dark)'
      />

      {/* Gradient overlays for depth */}
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(0.9 0.5 -0.5 0.9 26.5 0)'
        fill='url(#paint1_linear_448_114254)'
        fillOpacity='0.5'
      />
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(0.9 0.5 -0.5 0.9 19 0)'
        fill='url(#paint1_linear_448_114254)'
        fillOpacity='0.5'
      />
      <rect
        width='8'
        height='22'
        rx='4'
        transform='matrix(0.9 0.5 -0.5 0.9 11.5 0)'
        fill='url(#paint1_linear_448_114254)'
        fillOpacity='0.5'
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id='paint0_linear_448_114254' x1='4' y1='0' x2='4' y2='22' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--mui-palette-secondary-main)' />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='paint1_linear_448_114254' x1='4' y1='0' x2='4' y2='22' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--mui-palette-secondary-main)' />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
