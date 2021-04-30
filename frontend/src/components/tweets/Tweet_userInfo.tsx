import './tweet.css';
import { timeConverter } from '../../common/utils/timestamp';
import { ToolBox } from '../sideBar/toolbox/toolbox';

function Tweet_info(props:any){

  return(

      <div className={`tweet-data ${props.className}`}>
        <a href ="/user_route" className="font-bold mr-1 hover:underline">{props.name}</a>
        <p className="p--light-color  "> @{props.userName}. </p>
        <a href ="/tweet_route" className="p--light-color px-1 hover:underline"> {props.createdAt ? timeConverter(Number(props.createdAt)) : null}</a>
        <span className="tweet-ellipsis p--light-color z-10 ">
        

            <ToolBox
            design = {
              <i className="fas fa-ellipsis-h"></i>
            }
            >
          <ul className= " bg-gray-100 mb-40 ml-4 absolute bg-gray-100 " >
          <a href="/profile" className="mt-1 w-40 text-center block px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200
          hover:text-gray-900" >block</a>
          <a  className="mt-1 w-40 text-center block px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200
          hover:text-gray-900" >mute</a>

          </ul>
            </ToolBox>
      
        </span>
      </div>
  

  )}

export default Tweet_info ;