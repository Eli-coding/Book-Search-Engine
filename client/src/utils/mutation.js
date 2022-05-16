import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
omutation LoginUSER ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }

  `;


export const Add_USER = gql`

mutation Add_User($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        
       
      }
    }
  }


`;
export const SAVE_BOOK = gql`

mutation saveBook($savedBook: BookInfo) {
    saveBook(savedBook: $savedBook) {
      _id
      username
      email
      bookcount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }

`;

export const REMOVE_BOOK = gql`
mutation remove($bookId: ID!){
  removeBook(bookId:$bookId){
    _id
    username
    email
    savedBook{
      bookId
        authors
        description
        title
        image
        link
    }
  }

}
`


