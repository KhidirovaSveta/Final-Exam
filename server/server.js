const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const port = 8080

app.use(cors())
app.use(bodyParser.json())

const {Schema} = mongoose;

const productSchema = new Schema ({
    img: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
},
{timestamps: true}
)

const Product = mongoose.model("product", productSchema)

app.get('/', (req, res) => {
    Product.find({}, (error, docs) => {
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message: true})
        }
    })
})

app.get('/:id', (req, res) => {
    const {id} = req.params
    Product.findById(id, (error, doc) => {
        if(!error){
            res.send(doc)
        }else{
            res.status(500).json({message: true})
        }
    })
})

app.post('/', (req, res) => {
    let newProduct = new Product ({
        img: req.body.img,
        name: req.body.name,
        price: req.body.price,
    })
    newProduct.save()
    res.send("succsess")
})

app.delete('/:id', (req, res) => {
    const {id} = req.params
    Product.findByIdAndDelete(id, (error) => {
        if(!error){
            res.send("succsses")
        }else{
            res.status(404).json({message: true})
        }
    })
})

mongoose.set('strictQuery', false)

mongoose.connect(`mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/?retryWrites=true&w=majority`, (error) => {
    if(!error){
        app.listen(port, () => {
          console.log(`Example app listening on port http://localhost:${port}`)
        })
    }
})