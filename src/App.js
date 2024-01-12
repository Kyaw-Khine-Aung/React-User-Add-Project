import Customer from "./component-one/Users/Customer";
import { useEffect, useState } from "react";
import AddUser from "./component-one/Users/AddUser";

function App() {
  let [person, setPerson] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const userUrl = "https://randomuser.me/api/?results=10";
    fetch(userUrl)
      .then((response) => {
        const responseData = response.json();
        return responseData;
      })
      .then((data) => {
        const mapData = data.results.map((userData) => {
          return {
            id: userData.login.uuid,
            name: `${userData.name.title}${userData.name.first}${userData.name.last}`,
            phone: userData.phone,
            cell: userData.cell,
            image: userData.picture.thumbnail,
          };
        });
        setPerson(mapData);
      })
      .catch((error) => console.log(error));
  }, []);

  const removeUserList = (id) => {
    const newUser = person.filter((user) => user.id !== id);
    setPerson(newUser);
  };

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  const userDataHandler = (user) => {
    const newDataUser = [user, ...person]
    setPerson(newDataUser)
    setShowForm(!showForm)
  }
 
  return (
    <div className="container my-5">
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <h1 className="text-center text-info mb-2">Our Employee</h1>
        <button className="btn btn-primary btn-sm" onClick={showFormHandler}>Add User</button>
        {showForm && <AddUser addUser={userDataHandler} />}
        <div className="text-center">
          {person.map((customer) => (
            <Customer
              customer={customer}
              key={customer.id}
              remove={removeUserList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
