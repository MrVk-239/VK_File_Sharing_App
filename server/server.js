import express from 'express';
import routes from './routes/routes.js';
import DBconnection from './database/database.js';
import cors from 'cors';

DBconnection();


const PORT = process.env.PORT || 8000


const app = express();
app.use(cors());

app.use(routes)

app.listen(PORT, () => {
  console.log('Server is running on 8000');
});
export default app;
