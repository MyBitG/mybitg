import type { Config } from 'tailwindcss'

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      fontFamily: {
        brand: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
