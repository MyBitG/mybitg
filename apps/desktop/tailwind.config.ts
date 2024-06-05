import sharedConfig from '@mybitg/tailwind-config/tailwind.config'
import { type Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  presets: [sharedConfig]
} satisfies Config
