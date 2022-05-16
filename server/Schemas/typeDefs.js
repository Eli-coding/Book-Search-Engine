const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query{
    me: User
}
type User{
    _id: ID
    username: String!
    email:String
    bookcount: Int
    savedBooks: [Book]
}
type Book {
    bookId: ID!
    authors: [String]
    description:String
    title: String!
    image: String
    link: String

}
input BookInfo{
    author: [String!]
    description:String!
    title:String!
    bookId:String!
    image: String
    link:String
}
type Auth {
    token: ID!
    user: User
}

type Mutation {
    login (email: String!, password: String!):Auth
    addUser(username: String!, email: String!, password: String!):Auth
    saveBook(savedBook:BookInfo):User
    removeBook(bookId:ID!):User
}

`;

module.exports = typeDefs;
