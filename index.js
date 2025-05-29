require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const Product = require("./models/product.model")

const app = express()

const productRoute = require("./routes/product.route")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false})) // for form data

//routes
app.use("/api/products", productRoute)

app.get("/", (req, res) =>{
    res.send("Hello World again")
})

// Connect to MongoDB first
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB")
    // Start server after successful database connection
    const PORT = process.env.PORT || 3010
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection error:", error)
})

// curl request example:
// curl http://localhost:3010/api/products

// curl request example:
// curl http://localhost:3010/api/products/:id
// curl http://localhost:3010/api/products/6836d1b3af682899ef9a5c5d

//update product

//delete product

// curl request example:
// curl -X DELETE http://localhost:3010/api/products/6836d1b3af682899ef9a5c5d