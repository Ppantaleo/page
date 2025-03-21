/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esta línea es crucial para generar archivos estáticos
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  }
}

// Intentar importar configuración de usuario si existe
try {
  const userConfig = await import('./v0-user-next.config')
  if (userConfig.default) {
    Object.keys(userConfig.default).forEach(key => {
      if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig.default[key],
        }
      } else {
        nextConfig[key] = userConfig.default[key]
      }
    })
  }
} catch (e) {
  // Ignorar error si el archivo no existe
}

export default nextConfig;
