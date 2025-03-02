import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    allOrders: [Order]
    allShoesProduct: [ShoesProduct]
    singleProd(_id: ID!): ShoesProduct
  }

  type Order {
    userName: String
    userId: String
    subTotal: String
    status: String
    items: [itemInput]
  }

  type itemInput {
    itemId:String
    quantity: String
    size: String
    itemPrice: String
    itemImage: String
    itemName: String
  }

  type User {
    _id: ID!
    username: String
    password: String
    email: String
    street: String
    city: String
    state: String
    country: String
    postalCode: String
  }

  type ShoesProduct {
    _id: ID!
    productname: String
    mindetail: String
    fulldetail: String
    catagory: String
    price: String
    qunty: String
    pay: String
    sizes: [String]
    images: [String]
  }

  type Token {
    token: String
    user:User!
  }

  type Mutation {
    singUpUser(userNew: UserInput!): User
    loginUser(userLogin: LoginUserInput!): Token
    placeOrder(orderPlace:PlaceOrderInput!):Order
  }

  input UserInput {
    username: String!
    password: String!
    email: String!
    street: String!
    city: String!
    state: String!
    country: String!
    postalCode: String!
  }
  input LoginUserInput {
    password: String!
    email: String!
  }

  input PlaceOrderInput {
    userName: String
    userId: String
    subTotal: String
    status: String
    items: [item]
  }

  input item {
    itemId: String
    quantity: String
    size: String
    itemPrice: String
    itemImage: String
    itemName: String
  }
`;

export default typeDefs;
