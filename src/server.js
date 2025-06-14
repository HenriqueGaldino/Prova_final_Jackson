const express = require('express');
const userRouter = require('./router/user');
const productRouter = require('./router/product');
const categoryRouter = require('./router/category');
const orderRouter = require('./router/order');
const orderProduct = require('./router/orderProduct');
const database = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docks/swegger.yml');


console.log('Starting server...');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/category', categoryRouter);
app.use('/api/orderProduct', orderProduct);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



database.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });