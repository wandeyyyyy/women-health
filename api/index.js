const  express = require('express')
const  mongoose = require('mongoose')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')

const cookieParser = require('cookie-parser')

const  dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(express.json())
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log("MongoDb is connected")
    }).catch((err) => {
        console.log(err)
    })

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });