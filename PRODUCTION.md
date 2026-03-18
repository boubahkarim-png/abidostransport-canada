# 🚀 Abidostransport Canada - Production Deployment

## ✅ LIVE STATUS

**Both applications are running in production mode!**

---

## 🌐 Access URLs

| Service | Local URL | Status |
|---------|-----------|--------|
| **Customer Website** | http://localhost:3010 | ✅ Online |
| **Admin Dashboard** | http://localhost:3011 | ✅ Online |

---

## 📦 GitHub Repository

**Repository:** https://github.com/boubahkarim-png/abidostransport-canada

---

## 🖥️ Production Server Details

```bash
# Check service status
pm2 list

# View logs
pm2 logs abidostransport-web
pm2 logs abidostransport-admin

# Restart services
pm2 restart all

# Stop services
pm2 stop all
```

---

## 🔧 Production Configuration

- **Web Port:** 3010
- **Admin Port:** 3011
- **Process Manager:** PM2
- **Node Environment:** production
- **Auto-restart:** Enabled

---

## 📊 Current Status

```
┌────┬──────────────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name                     │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │
├────┼──────────────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ abidostransport-web      │ default     │ N/A     │ fork    │ 13418    │ 11m    │ 0    │ online    │ 0%       │ 60.6mb   │
│ 1  │ abidostransport-admin    │ default     │ N/A     │ fork    │ 13419    │ 11m    │ 0    │ online    │ 0%       │ 59.2mb   │
└────┴──────────────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┘
```

---

## 🌍 External Access

To access the websites externally, you need to:

1. **Configure Nginx reverse proxy** (recommended)
2. **Or use the server's public IP** with the ports

### Example Nginx Configuration

```nginx
# Customer Website
server {
    listen 80;
    server_name abidostransport.com;
    
    location / {
        proxy_pass http://localhost:3010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Admin Dashboard
server {
    listen 80;
    server_name admin.abidostransport.com;
    
    location / {
        proxy_pass http://localhost:3011;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📝 Deployment Date

**Deployed:** 2025-03-18  
**Status:** Production Ready ✅