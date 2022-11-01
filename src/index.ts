import express from 'express';

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the api',
  });
});

app.listen(5000, () => console.log('Server started on port 5000'));
