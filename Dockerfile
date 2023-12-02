# Use a Node base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8506

# Start the app
CMD ["npm", "start"]
