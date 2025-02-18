# Dockerfile สำหรับการ setup และรัน Next.js
# Stage 1: Build
FROM node:18-alpine AS builder

# ตั้ง working directory เป็น /app
WORKDIR /app

# คัดลอกไฟล์ package.json (และ package-lock.json ถ้ามี)
COPY package.json package-lock.json* ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมดเข้าไปใน container
COPY . .

# Build แอปพลิเคชัน Next.js สำหรับ production
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS runner

# กำหนด env ว่าเป็น production
ENV NODE_ENV production

WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package.json package-lock.json* ./

# ติดตั้งเฉพาะ production dependencies
RUN npm install --production

# คัดลอกไฟล์ที่สำคัญจาก stage build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# หากมีไฟล์ next.config.js ก็สามารถคัดลอกเข้าไปได้
COPY --from=builder /app/next.config.ts ./

# เปิดพอร์ต 3000 สำหรับ Next.js
EXPOSE 3000

# สั่งให้ container รันคำสั่ง start สำหรับ Next.js
CMD ["npm", "start"]
