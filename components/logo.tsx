interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-24 h-24",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer circle/frame */}
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className="text-primary" />

        {/* Book shape */}
        <path
          d="M30 25H70V75C70 75 60 70 50 70C40 70 30 75 30 75V25Z"
          fill="currentColor"
          className="text-primary/20"
        />
        <path
          d="M30 25H70V75C70 75 60 70 50 70C40 70 30 75 30 75V25Z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />

        {/* Book spine */}
        <line x1="50" y1="25" x2="50" y2="70" stroke="currentColor" strokeWidth="2" className="text-primary" />

        {/* Stylized P letters */}
        <path
          d="M38 40H42C44.2091 40 46 41.7909 46 44V44C46 46.2091 44.2091 48 42 48H38V40Z"
          fill="currentColor"
          className="text-primary"
        />
        <path d="M38 40V60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />

        <path
          d="M58 40H62C64.2091 40 66 41.7909 66 44V44C66 46.2091 64.2091 48 62 48H58V40Z"
          fill="currentColor"
          className="text-primary"
        />
        <path d="M58 40V60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />

        {/* Digital element - connecting dots */}
        <circle cx="30" cy="85" r="3" fill="currentColor" className="text-primary" />
        <circle cx="50" cy="85" r="3" fill="currentColor" className="text-primary" />
        <circle cx="70" cy="85" r="3" fill="currentColor" className="text-primary" />
        <line x1="33" y1="85" x2="47" y2="85" stroke="currentColor" strokeWidth="2" className="text-primary" />
        <line x1="53" y1="85" x2="67" y2="85" stroke="currentColor" strokeWidth="2" className="text-primary" />
      </svg>
    </div>
  )
}

