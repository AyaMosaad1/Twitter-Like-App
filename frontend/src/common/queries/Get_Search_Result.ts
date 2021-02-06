import { gql } from "@apollo/client";

export const Get_Search_Result = gql`
query search (
  $name: String!,
  $page:Int
) {
  users(search:$name,page:$page) {
    users{
      name 
       username:userName 
       imageURI: imageURL 
      
    }
  }
}

`