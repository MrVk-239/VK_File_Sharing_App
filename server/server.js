import express from 'express';
import routes from './routes/routes.js';
import DBconnection from './database/database.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

DBconnection();


const app = express();
app.use(cors());

app.use(routes)


const PORT= process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
export default app;
