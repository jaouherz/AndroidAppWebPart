import express from 'express';
import usersRouter from './routes/users.js';
import infractionRoutes from './routes/infractionRoute.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/api/infractions', infractionRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});