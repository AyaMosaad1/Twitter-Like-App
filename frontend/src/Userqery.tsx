
import {  gql} from '@apollo/client';

export const LoggedUser= gql`
      query logged_user ($id:ID!){
        user(id: $id){  
            userName
            name
            imageURL
            bio
            coverImageURL
            createdAt 
            followingCount
            followersCount
            birthDate
            tweets {
              totalCount
            }   
        }
}`