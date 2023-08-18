# Gunakan base image Node.js yang sesuai
FROM node:14

# Set direktori kerja di dalam kontainer
WORKDIR /react-app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh kode proyek ke direktori kerja
COPY . .

# Menjalankan server
CMD npm start