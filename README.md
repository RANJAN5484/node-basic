# Dockerized Node.js Application 🐳

This project demonstrates how to containerize a Node.js application using Docker.

---

## **Requirements**

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (Optional if running in a container)
- [Docker](https://www.docker.com/)

---

## **Dockerfile Overview**

The following Dockerfile is used to containerize the Node.js application:

```Dockerfile
# Step 1: Use an official Node.js runtime as a parent image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the port your app will run on (e.g., 8080)
EXPOSE 8080

# Step 7: Define the command to run the app
CMD ["npm", "start"]
```

---

## **How to Build and Run the Container**

### **Step 1: Build the Docker Image**

Run the following command in the terminal to build the Docker image:

```bash
docker build -t my-node-app .
```
- `-t my-node-app` tags the image with the name `my-node-app`.

---

### **Step 2: Run the Docker Container**

Run the container using the `docker run` command:

```bash
docker run -p 8080:8080 my-node-app
```
- `-p 8080:8080` maps port `8080` in the container to port `8080` on your local machine.
- `my-node-app` is the name of the image you built.

---

### **Step 3: Access the Application**

Once the container is running, open your browser and visit:

```
http://localhost:8080
```

You should see your application running.

---

## **Project Structure**

Your project should follow this structure:

```plaintext
project-folder/
│
├── src/
│   └── index.js        # Main application code
│
├── package.json        # Node.js project dependencies
├── package-lock.json   # Lock file for dependencies
└── Dockerfile          # Docker instructions
```

---

## **Example `package.json`**

Ensure you have a `start` script in your `package.json`:

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js app running in Docker",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

---

## **Push Image to Docker Hub (Optional)**

To share your image on Docker Hub:

1. **Login to Docker Hub**:
   ```bash
   docker login
   ```

2. **Tag Your Image**:
   ```bash
   docker tag my-node-app yourusername/my-node-app
   ```

3. **Push to Docker Hub**:
   ```bash
   docker push yourusername/my-node-app
   ```

---

## **Conclusion**

You have successfully containerized a Node.js application using Docker! 🎉  
Feel free to extend this Dockerfile for production use cases, such as adding multi-stage builds, environment variables, or optimizations.

---

