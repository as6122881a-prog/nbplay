"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hue, setHue] = useState(270) // Começa no violeta da marca
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
      }
    }

    // Ciclo de cores mais rápido (intervalo de 20ms e incremento de 2)
    const interval = setInterval(() => {
      setHue((prev) => (prev + 2) % 360)
    }, 20)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      clearInterval(interval)
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Aura grande de fundo - Brilho aumentado para 0.25 opacity */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-colors duration-300"
        style={{
          background: `radial-gradient(650px at ${position.x}px ${position.y}px, hsla(${hue}, 90%, 60%, 0.25), transparent 85%)`
        }}
      />
      {/* Bola central vibrante - Maior, mais saturada e com sombra intensa */}
      <div 
        className="fixed pointer-events-none z-[9999] w-[24px] h-[24px] rounded-full blur-[2px] opacity-90 transition-transform duration-75 ease-out"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          backgroundColor: `hsl(${hue}, 95%, 65%)`,
          boxShadow: `0 0 40px 18px hsla(${hue}, 95%, 65%, 0.7)`
        }}
      />
    </>
  )
}
