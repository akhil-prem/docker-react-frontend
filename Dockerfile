# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app using serve
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
