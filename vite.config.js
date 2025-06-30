import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        clubs: 'clubs.html',
        services: 'services.html',
        contact: 'contact.html'
      }
    }
  }
})