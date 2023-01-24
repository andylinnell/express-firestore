// import outside objects
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
//import my own functions
import { getAllRestaurants, getRestaurantById, createRestaurant } from "./src/restaurants.js"

dotenv.config()

const PORT = process.env.PORT || 3030 // short circuiting 

const app = express()
app.use(cors())   // open brackets means is open to anyone
app.use(express.json())

// set up routes in src folder
// app.get('/restaurants', getAllRestaurants) - gets all restaurants
// app.get('/restaurants/:restId', getRestaurantById) - gets singular restaurant
// app.post('/restaurants', createRestaurant)

// set up actual routes using src folder
app.get('/restaurants', getAllRestaurants)
app.get('/restaurants/:resId', getRestaurantById)
app.post('/restaurants', createRestaurant)

// listen on port
app.listen(PORT,() => {
    console.log(`Listening on http://localhost:${PORT}...`)
})