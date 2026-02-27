export default {
 darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // Example blue
        'primary-dark': '#1d4ed8',
        secondary: '#4f46e5', // Example indigo
        'secondary-dark': '#4338ca'
      }
    }
  },
  plugins: [],
}
