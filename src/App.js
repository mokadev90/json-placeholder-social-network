import React, { useState, useEffect } from 'react';
import './App.css';
import { UserCard } from './components/UserCard';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((data) => {
      setUsers([...data.data]);
    });
    /*axios
      .all([
        axios.get(`https://jsonplaceholder.typicode.com/users`),
        axios.get(`https://jsonplaceholder.typicode.com/posts`),
      ])
      .then((data) => {
        setUsers(data[0].data);
        setPosts(data[1].data);
      }); */
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h2 className="logo">{`{JSON} Placeholder Social Network`}</h2>
      </div>
      {/*  {console.log(users)}
      {console.log(posts)} */}
      <div className="users-container">
        <h2 className="subtitle">Registered users</h2>
        {users.map((user) => {
          console.log(user);
          /* posts.map((post) => {
          if (user.id === post.userId)
            return <PostCard name={user.name} {...post} />;
        }); */
          return <UserCard {...user} />;
        })}
      </div>
    </div>
  );
}

export default App;
