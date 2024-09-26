// import our dependencies
const express = require("express")
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')

// Question 1 goes here
// retrieve all patients data
app.get('/patient', (req, res) => {
    const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
    db.query(getPatients, (err, data) => {
        // if I have an error 
        if(err) {
            return res.status(400).send("Failed to get Patients' Data", err)
        }

        // res.status(200).render('data', { data })
        res.status(200).send(data)
    })
})

// Question 2 goes here
// Retrieve all providers
app.get('/providers', (req, res) => {
    const getPatients = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(getPatients, (err, data) => {
        // if I have an error 
        if(err) {
            return res.status(400).send("Failed to get Providers' Data", err)
        }

        // res.status(200).render('data', { data })
        res.status(200).send(data)
    })
})

// Question 3 goes here
// Filter patients by First Name
app.get('/patient', (req, res) => {
    const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients ORDER BY first_name;"
    db.query(getPatients, (err, data) => {
        // if I have an error 
        if(err) {
            return res.status(400).send("Failed to get Patients' Name", err)
        }

        // res.status(200).render('data', { data })
        res.status(200).send(data)
    })
})

// Question 4 goes here
 // Retrieve all providers by their specialty
app.get('/providers', (req, res) => {
    const getPatients = "SELECT last_name, provider_id, provider_specialty  FROM providers"
    db.query(getPatients, (err, data) => {
        // if I have an error 
        if(err) {
            return res.status(400).send("Failed to get providers' Disciline", err)
        }

        // res.status(200).render('data', { data })
        res.status(200).send(data)
    })
})

// configure environment variables
dotenv.config();

// create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// test the connection
db.connect((err) => {
    // connection is not successful
    if(err) {
        return console.log("Error connecting to the database: ", err)
    }

    // connection is successful
    console.log("Successfully connected to MySQL: ", db.threadId)
})

// this is not important for the assignment
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// start and listen to the server
app.listen(3304, () => {
    console.log(`server is running on port 3304...`)
})