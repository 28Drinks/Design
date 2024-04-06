import React, { useState, useEffect } from 'react';

const Profile = () => {

  const [user, setUser] = useState();

  useEffect( () => {
      async function getCurrentUser() {

        // User mockup, db call here
        const user = {"username": "28Kadsen", "email": "myemail@web.de", "role": "User", "registered_at": "timeStamp"}
        setUser(user);
      }
      getCurrentUser();
  }, []);


  if (!user) {
    console.log("User data not found"); // for debugging
    return <div>Not logged in</div>;
  }

  console.log(user)

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};


export default Profile