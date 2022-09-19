import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.routers.js';
import authRouter from './routes/auth.routers.js';
import checkoutRouter from './routes/checkout.routers.js';
 
const app = express();

app.use(cors());
app.use(express.json());

app.use(productsRouter);
app.use(authRouter);
app.use(checkoutRouter);


app.listen(process.env.PORT, () => console.log("Listening on port 4000"));