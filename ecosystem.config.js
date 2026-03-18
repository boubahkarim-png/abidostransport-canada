module.exports = {
  apps: [
    {
      name: 'abidostransport-web',
      cwd: '/root/abidostransport-canada/packages/web',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
    {
      name: 'abidostransport-admin',
      cwd: '/root/abidostransport-canada/packages/admin',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3002,
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
}