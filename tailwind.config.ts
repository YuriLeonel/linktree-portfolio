export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#b829dd',
        'neon-green': '#00ff41',
        'neon-pink': '#ff00ff',
        'neon-blue': '#00d4ff',
        'neon-cyan': '#00f0ff',
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050505',
        'cyber-light': '#1a1a2e',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
