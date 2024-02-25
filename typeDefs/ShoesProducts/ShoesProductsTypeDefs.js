const {gql} = require('apollo-server-express')

const ShoesProductsTypsDefs = gql`
type ShoesProduct{
    productname:String
    mindetail:String
    fulldetail:String
    _id:ID
    catagory:String
    price:String
    qunty:String
    pay:String
    sizes:[String]
    images:[String]
    createdAt: String
    updatedAt: String



    type Query {
        AllAddiasProduct:[ShoesProduct]
    }

    type Mutation{
        singleaddiasProduct()
    }
`

module.exports = ShoesProductsTypsDefs;