const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
type User{
    _id:ID!
    username:String!
    password:String!
    email:String!
    isAdmin:String!
    street:String!
    city:String!
    state:String!
    country:String!
    postalCode:String!
}

type Query{
    users:[User]!
}

type Mutation{
    register(
    username:String!
    password:String!
    email:String!
    isAdmin:String!
    street:String!
    city:String!
    state:String!
    country:String!
    postalCode:String!
    ):User
    
    loginUser(
        email:String
        password:String!
    )
}
`;

module.exports = userTypeDefs;
