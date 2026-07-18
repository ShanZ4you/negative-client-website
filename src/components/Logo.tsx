export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <linearGradient id="nc-frontL" x1="70" y1="55" x2="95" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f2f0ff" />
          <stop offset="1" stopColor="#b9b0f5" />
        </linearGradient>
        <linearGradient id="nc-sideL" x1="95" y1="60" x2="108" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9c8ff0" />
          <stop offset="1" stopColor="#6f5de0" />
        </linearGradient>
        <linearGradient id="nc-frontR" x1="145" y1="55" x2="170" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f2f0ff" />
          <stop offset="1" stopColor="#b9b0f5" />
        </linearGradient>
        <linearGradient id="nc-sideR" x1="170" y1="60" x2="183" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9c8ff0" />
          <stop offset="1" stopColor="#6f5de0" />
        </linearGradient>
        <linearGradient id="nc-diagFront" x1="90" y1="70" x2="160" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8f9dfb" />
          <stop offset="1" stopColor="#5b6ef0" />
        </linearGradient>
        <linearGradient id="nc-diagSide" x1="98" y1="82" x2="168" y2="162" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5fe4dd" />
          <stop offset="1" stopColor="#3fb8e8" />
        </linearGradient>
        <linearGradient id="nc-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a3fc7" />
          <stop offset="1" stopColor="#2f2a99" />
        </linearGradient>
      </defs>

      <g transform="translate(-26.5,-11)">
      <polygon points="70,150 95,150 108,162 83,162" fill="url(#nc-bottom)" />
      <polygon points="95,60 108,72 108,162 95,150" fill="url(#nc-sideL)" />
      <polygon points="70,60 95,60 95,150 70,150" fill="url(#nc-frontL)" />

      <polygon points="145,150 170,150 183,162 158,162" fill="url(#nc-bottom)" />
      <polygon points="170,60 183,72 183,162 170,150" fill="url(#nc-sideR)" />
      <polygon points="145,60 170,60 170,150 145,150" fill="url(#nc-frontR)" />

      <polygon points="100,82 113,82 168,150 155,150" fill="url(#nc-diagSide)" />
      <polygon points="93,70 106,70 161,138 148,138" fill="url(#nc-diagFront)" />

      <polygon points="158,32 168,42 158,52 148,42" fill="#5fe4dd" />
      <polygon points="158,32 168,42 158,52" fill="#8ff0ea" opacity="0.55" />

      <polygon points="36,156 52,156 42,172" fill="#8f7ef8" />
      <polygon points="36,156 52,156 44,162" fill="#c3b8ff" opacity="0.6" />
      </g>
    </svg>
  )
}
