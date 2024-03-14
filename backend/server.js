// server.js
import dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/db.js';
import Routes from './routes/Routes.js';
import swagger from './config/swagger.js';
dotenv.config();

// variables declarations
const app = express();
const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Connecting to Database;
connectDb(MONGODB_URI);

// Json middleware
app.use(express.json());

// Use Swagger middleware
app.use(swagger);

// Load Routes
app.use("/api", Routes);

// listen on port
app.listen(port, () => {
    console.log(`App listening on port https://localhost:${port}`);
});
