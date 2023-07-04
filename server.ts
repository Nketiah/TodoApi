import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'
import usersRoutes from './routes/usersRoutes'
// import accountRoutes from './routes/accountRoutes'


//Initialize express
const app = express()

//Load middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Accept incoming request data
//regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//CORS
// const corsOptions = {
//  origin: 'http://localhost:3000',
//  optionsSuccessStatus: 200 
// }
// app.use(cors(corsOptions))


//Registering Routes
app.get('/', (req, res) => {
  res.send('API running...')
})

app.use('/api/v1/auth', usersRoutes)
//app.use('/api/v1/account', accountRoutes)



const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`)
)