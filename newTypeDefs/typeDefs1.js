import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    allOrders: [Order]
    allShoesProduct: [ShoesProduct]
    singleProduct(_id: ID!): ShoesProduct
  }

  type Order {
    userName: String
    userId: String
    subTotal: String
    status: String
    items: [itemInput]
  }

  type itemInput {
    _id: ID
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
  }

  type Mutation {
    singUpUser(userNew: UserInput!): User
    loginUser(userLogin: LoginUserInput!): Token
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
`;

export default typeDefs;
