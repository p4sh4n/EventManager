require('dotenv').config();
require('express-async-errors'); //instead of using unnecessary try and catch blocks
const express = require('express');
const cors = require('cors')
const app = express();
const userRouter = require('./routes/userRoute')
const eventRouter = require('./routes/eventRoute')
const ticketRouter = require('./routes/ticketRoute')

//connectDB
const connect = require('./db/connect')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// extra packages
app.use(cors({
  origin: "*",
  methods: '*',
  allowedHeaders: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}));

// routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/events', eventRouter)
app.use('/api/v1/tickets', ticketRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();