import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserName from "./Components/UserName";
import { UserData } from "./types";
import UserAge from "./Components/UserAge";
import UserAddress from "./Components/UserAddress";
import UserNameChange from "./Components/UserNameChange";


function App() {
  const [user, setUser] = useState<UserData>({
    name: "",
    age: 0,
    address: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setUser({ ...user, name: value });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const firstUser = data.results[0];

      setUser((prev) => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name,
        };
      });
    };

    getData();
  }, []);


  return (
    <div className="App">
      <UserName user={user}/>
      <UserAge user={user} />
      <UserAddress user={user} />
      <br></br>
      <UserNameChange user={user} onNameChanged={handleChange}/>
     
    </div>
  );
}

export default App;
