import mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
    productname: {
        type: String,
        require: true
    },
    mindetail: {
        type: String,
        require: true
    },
    fulldetail: {
        type: String,
        require: true
    },
    catagory: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    qunty: {
        type: String,
        require: true
    },
    pay: {
        type: String,
        require: true
    },
    sizes: {
        type: Array,
        default: []
    }
    ,
    images: {
        type: Array,
        default: []
    }

})
mongoose.model("AddiasProduct", productsSchema)