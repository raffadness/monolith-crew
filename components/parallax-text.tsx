"use client"

import type React from "react"

import { useRef } from "react"
import { useScroll, useSpring, useTransform, motion, useAnimationFrame } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  baseVelocity: number
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useRef(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useRef(0)
  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.current += moveBy
    x.current = baseX.current % 100
  })

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap border-t border-b border-white/30 py-6">
      <motion.div
        className="text-4xl md:text-6xl font-bold tracking-tight flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span className="block mr-6">{children}</span>
        <span className="block mr-6">{children}</span>
        <span className="block mr-6">{children}</span>
        <span className="block mr-6">{children}</span>
      </motion.div>
    </div>
  )
}

function useVelocity(value: any) {
  const velocityRef = useRef(0)
  const prevRef = useRef(value.get())

  useAnimationFrame((_t, delta) => {
    const current = value.get()
    const delta_ms = delta / 1000

    const velocity = (current - prevRef.current) / delta_ms
    prevRef.current = current
    velocityRef.current = velocity
  })

  return velocityRef
}
