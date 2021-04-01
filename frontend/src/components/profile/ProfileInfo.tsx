
import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import bg from "../../routes/1500x500.jpeg";
import avatar from "../../routes/mjv-d5z8_400x400.jpg";
import FollowButton from '../FollowButton/FollowButton';
import {User} from '../../common/TypesAndInterfaces'
import {Get_Logged_user} from "../../common/queries/localUser"
                                                                                                                                                     
function ProfileInfo() {

  const userData = useQuery (Get_Logged_user)
  const user:User = userData.data.logUser.user
  
  return (
    
    <Fragment>
      <header className="top-bar px-3 py-2">
        <span className=" m-3">
          <a href="http://">
            <i className="fa fa-arrow-left  p--main-color" aria-hidden="true"></i>
          </a>
        </span>
        <div>
          <p className="font-extrabold text-lg ">Toka</p>
          {/* featch fron tweet */}
          <p className="p--light-color block ">{user.tweets?.totalCount} tweet</p> 
        </div>
      </header>
      <div className="pf--container">

        <div className="pf--bg" >
          {user.coverImageURL? (
                      <img src={user.coverImageURL}  
                      alt="avatar"/>
          ): (<img src={bg} alt="avatar"/>)}

        </div>
        <div className="pf--avatar">
        {user.imageURL? (
                      <img className="pf--avatar-img" src={user.imageURL}  
                      alt="avatar"/>
          ): (<img className="pf--avatar-img" src={avatar} alt="avatar"/>)}
        </div>

        <div className="pf--info">
          <div className="pf--flw-btn-div p-3 ">
            <FollowButton id="1" py="py-1.5" following={false} /></div>
          <div className="mx-2 ">
            <p className="font-extrabold text-lg pb-1">{user.name}</p>
            <p className="p--light-color block pb-1">@{user.userName}</p>
            <p>{user.bio}</p>
            <div className="p--light-color pb-1">
            <span className="pr-2"><i className="fa fa-map-marker" aria-hidden="true"></i> Egypt ... cairo</span>
            <span className="px-2" ><i className="fa fa-gift" aria-hidden="true"></i> Born {user.birthDate} </span>
            <span className="px-2"><i className="fa fa-calendar" aria-hidden="true"></i> Joined {user.createdAt}</span>
            </div>
            <div className="font-bold pb-1">
              {/* featch followers count  */}
              <a href="/"> {user.followingCount} <span className="p--light-color mr-4 ">following</span> </a>
              <a href="/">{user.followersCount} <span className="p--light-color mr-4">Follower</span> </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileInfo;




