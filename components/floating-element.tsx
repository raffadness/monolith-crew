"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface FloatingElementProps {
  children: React.ReactNode
  xFactor?: number
  yFactor?: number
  rotateFactor?: number
  scaleFactor?: number
  delay?: number
  className?: string
  reverse?: boolean
}

export default function FloatingElement({
  children,
  xFactor = 0,
  yFactor = 0,
  rotateFactor = 0,
  scaleFactor = 0,
  delay = 0,
  className = "",
  reverse = false,
}: FloatingElementProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Create transformations based on scroll position
  const x = useTransform(scrollYProgress, [0, 1], reverse ? [xFactor, -xFactor] : [-xFactor, xFactor])
  const y = useTransform(scrollYProgress, [0, 1], reverse ? [yFactor, -yFactor] : [-yFactor, yFactor])
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [rotateFactor, -rotateFactor] : [-rotateFactor, rotateFactor],
  )
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + scaleFactor * 0.1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ x, y, rotate, scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
