const app = require('./app')
const connectDatabase = require('./config/database')


const dotenv = require('dotenv');

// Setting up config file
dotenv.config({ path: 'backend/config/config.env'})



//Connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT, () =>  {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle UnHandled Promise Rejecions
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1)
    })

})