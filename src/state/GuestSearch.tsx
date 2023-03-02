import React, { useState } from 'react';

const Guests = [
  { name: 'Sarah', age: 20 },
  { name: 'John', age: 22 },
  { name: 'Lili', age: 15 },
  { name: 'Hili', age: 15 },
];
const GuestSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState<
    { name: string; age: number } | undefined
  >();
  const searchUser = () => {
    // const findResult= Guests.filter((guest)=>{
    //   return guest.name.match(new RegExp(name,'ig'))
    const findResult = Guests.find((guest) => {
      return guest.name === name;
    });
    setUsers(findResult);
    console.log(findResult);
    setName('');
  };
  return (
    <div>
      <h3>Find User</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchUser}>Find User</button>
      <div>
        <p>{users && users.name}</p>
        <p>{users && users.age}</p>
      </div>
    </div>
  );
};

export default GuestSearch;
