console.log('May Node be with you')

const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const cors = require('cors')
const PORT = 3000
require('dotenv').config()

let connectionString = process.env.connectionString

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
 
    app.set ('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(bodyParser.json())


    app.get('/', (req, res) => {
      const cursor = db.collection('quotes').find().toArray()
      .then (results => 
        res.render('index.ejs', {quotes: results})
        )
      .catch(error => console.log(error))
    }) 

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
      .then (result => 
        res.redirect('/')
      )
      .catch(error => console.log(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => {
          console.log(result)
          res.json('Success')
        })
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
      quotesCollection.deleteOne (
      {name: req.body.name}
      )
      .then(result => {
        if (result.deletedCount === 0) {
          return res.json('No quote to delete')
        }
        res.json("Deleted Darth Vadar's quote")
      })
      .catch(error => console.error(error))
    })

    app.listen(process.env.PORT || PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
    })

  })


  .catch(error => console.log(error))


