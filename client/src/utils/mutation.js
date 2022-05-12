import {gql} from '@apollo/client'
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


`

