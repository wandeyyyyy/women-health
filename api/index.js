const  express = require('express')
const  mongoose = require('mongoose')
const userRouter = require('./routes/user.route')
const  dotenv = require('dotenv')
dotenv.config();

const app = express();

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