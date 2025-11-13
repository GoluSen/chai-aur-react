import React, {usercontext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {User} = UserContext(Usercontext)

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>

  }


export default Profile
