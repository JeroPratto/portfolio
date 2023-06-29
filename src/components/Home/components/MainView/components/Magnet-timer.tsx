import React, { useEffect, useRef } from 'react'

interface Particle {
	x: number
	y: number
	s: number
	a: number
	w: number
	h: number
	radius: number
	color: string
	progress: number
	canvas: CanvasRenderingContext2D
	center: { x: number; y: number }
	point_of_attraction: { x: number; y: number }
}

interface MagnetProps {
	maxParticles: number
	frequency: number
}

const Magnet: React.FC<MagnetProps> = ({ maxParticles, frequency }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particlesRef = useRef<Particle[]>([])
	const timeToRecreateRef = useRef(false)
	const animationFrameRef = useRef<number>()

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas!.getContext('2d')!
		let particles: any = particlesRef.current

		let initNum = maxParticles
		let maxTime = frequency * maxParticles

		const calculateDistance = (
			v1: { x: number; y: number },
			v2: { x: number; y: number },
		) => {
			let x = Math.abs(v1.x - v2.x)
			let y = Math.abs(v1.y - v2.y)
			return Math.sqrt(x * x + y * y)
		}

		class Particle {
			x: number
			y: number
			s: number
			a: number
			w: number
			h: number
			radius: number
			color: string
			progress: number
			canvas: CanvasRenderingContext2D
			center: { x: number; y: number }
			point_of_attraction: { x: number; y: number }

			constructor(canvas: CanvasRenderingContext2D) {
				let random = Math.random()
				this.progress = 0
				this.canvas = canvas
				this.center = {
					x: window.innerWidth / 2,
					y: window.innerHeight / 2,
				}

				this.point_of_attraction = {
					x: window.innerWidth / 2,
					y: window.innerHeight / 2,
				}

				if (Math.random() > 0.5) {
					this.x = window.innerWidth * Math.random()
					this.y =
						Math.random() > 0.5
							? -Math.random() - 100
							: window.innerHeight + Math.random() + 100
				} else {
					this.x =
						Math.random() > 0.5
							? -Math.random() - 100
							: window.innerWidth + Math.random() + 100
					this.y = window.innerHeight * Math.random()
				}

				this.s = Math.random() * 2
				this.a = 0
				this.w = window.innerWidth
				this.h = window.innerHeight
				this.radius = random > 0.2 ? Math.random() * 1 : Math.random() * 3
				this.color = random > 0.2 ? '#694FB9' : '#9B0127'
				this.radius = random > 0.8 ? Math.random() * 2.2 : this.radius
				this.color = random > 0.8 ? '#3CFBFF' : this.color
			}

			render() {
				this.canvas.beginPath()
				this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
				this.canvas.lineWidth = 2
				this.canvas.fillStyle = this.color
				this.canvas.fill()
				this.canvas.closePath()
			}

			move() {
				let p1 = { x: this.x, y: this.y }
				let distance = calculateDistance(p1, this.point_of_attraction)
				let force = Math.max(100, 1 + distance)

				let attr_x = (this.point_of_attraction.x - this.x) / force
				let attr_y = (this.point_of_attraction.y - this.y) / force

				this.x += Math.cos(this.a) * this.s + attr_x
				this.y += Math.sin(this.a) * this.s + attr_y
				this.a +=
					Math.random() > 0.5
						? Math.random() * 0.9 - 0.45
						: Math.random() * 0.4 - 0.2

				if (distance < 30 + Math.random() * 100) {
					return false
				}

				this.render()
				this.progress++
				return true
			}
		}

		const populate = (num: number): number => {
			for (let i = 0; i < num; i++) {
				setTimeout(() => {
					// Add particle
					particles.push(new Particle(context))
				}, frequency * i)
			}
			return particles.length
		}

		const clear = (): void => {
			context.globalAlpha = 0.08
			context.fillStyle = '#ECECEC'
			context.fillRect(0, 0, canvas!.width, canvas!.height)
			context.globalAlpha = 1
		}

		const update = (): void => {
			particlesRef.current = particles.filter((p: any) => p.move())

			// Recreate particles
			if (timeToRecreateRef.current) {
				if (particles.length < initNum) {
					populate(1)
				} else {
					timeToRecreateRef.current = false
				}
			}

			clear()
			animationFrameRef.current = requestAnimationFrame(update)
		}

		const handleResize = (): void => {
			canvas!.width = window.innerWidth
			canvas!.height = window.innerHeight

			particles.forEach((particle: any) => {
				particle.w = window.innerWidth
				particle.h = window.innerHeight
				particle.center.x = window.innerWidth / 2
				particle.center.y = window.innerHeight / 2
				particle.point_of_attraction.x = window.innerWidth / 2
				particle.point_of_attraction.y = window.innerHeight / 2
			})
		}

		const handleVisibilityChange = (): void => {
			if (document.hidden) {
				cancelAnimationFrame(animationFrameRef.current!)
			} else {
				animationFrameRef.current = requestAnimationFrame(update)
			}
		}

		canvas!.width = window.innerWidth
		canvas!.height = window.innerHeight
		window.addEventListener('resize', handleResize)
		document.addEventListener('visibilitychange', handleVisibilityChange)

		populate(maxParticles)
		update()

		return () => {
			cancelAnimationFrame(animationFrameRef.current!)
			window.removeEventListener('resize', handleResize)
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [maxParticles, frequency])

	return <canvas ref={canvasRef} />
}

export default Magnet
