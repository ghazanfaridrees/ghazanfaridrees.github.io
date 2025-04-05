"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = "", className = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = 0
    const start = Date.now()

    const timer = setInterval(() => {
      const timePassed = Date.now() - start
      const progress = Math.min(timePassed / duration, 1)

      countRef.current = Math.floor(progress * value)
      setCount(countRef.current)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  )
}

