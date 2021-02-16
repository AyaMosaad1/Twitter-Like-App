
import './tweet.css';
import avatar from "../../routes/mjv-d5z8_400x400.jpg";


export interface TweetData {
  user? :{
    imageURL?:string
    name?:string
    userName?:string
  }
  id?:string
  text :string
  likesCount? :number
  repliesCount?:number
  createdAt?:number
  isLiked?:boolean
}


const Tweet : React.FC <TweetData> = (props) =>  (
 
  
      <div className="tweet-box">
      
        <div className="tweet-icon">
          {props.user?.imageURL ?(
                      <img src={props.user?.imageURL}  
                      alt="avatar"/>
          ): (<img src={avatar} alt="avatar"/>)}
        </div>
        <div className="tweet-aside">
          <div className="tweet-data">
            <p className="font-bold mr-1">{props.user?.name}</p>
            <p className="p--light-color"> @{props.user?.userName} . </p>
            <p className="p--light-color px-1"> {props.createdAt}</p>
            <span className="tweet-ellipsis p--light-color">
            <i className="fas fa-ellipsis-h"></i>
          </span>
        </div>
          <div className="tweet-content">
            <span>
              {props.text}
            </span>    
          <div className="tweet-toolbar p--light-color  ">
            <a href="/">
            <i className="fas fa-reply text-base font-sm "></i>
            <span>{props.repliesCount}</span>
            </a>
            <a href="/">
            <i className="fas fa-retweet text-base font-sm"></i>
            <span>2</span>
            </a>
            <a href="/">
            <i className="far fa-heart text-base font-sm"></i>
            <span>{props.likesCount}</span>
            </a>
          </div>
          </div>
        </div>   

    </div>
  );



export default Tweet