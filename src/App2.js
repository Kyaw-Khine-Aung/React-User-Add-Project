// import One from "./components/One";
// import Student from "./components/Student";
// import Two from "./components/Two";
// import Background from "./components/Background";
// import Form from "./components/Form";

// function App() {
//   const name = "code writer";
//   const students = [
//     {
//       name: "kyawthanlin",
//       age: 22,
//     },
//     {
//       name: "kyawkhineaung",
//       age: 25,
//     },
//     {
//       name: "sumyatnwe",
//       age: 23,
//     },
//   ];
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <One name={name} />
//         <Student name={students[0].name} age={students[0].age} />
//         <Student name={students[1].name} age={students[1].age} />
//         <Student name={students[2].name} age={students[2].age} />
//       <Background>
//         <Two />
//       </Background>
//       <Form />
//     </div>
//   );
// }
// export default App;

import User from "./component-one/Users/User2";
import { useState } from "react";

function App() {
  let users = [
    {
      id: 1,
      image: "https://rb.gy/cckoge",
      phone: "09895517265",
      cell: "09252063781",
      name: "mg mg",
    },
    {
      id: 2,
      image: "https://rb.gy/cckoge",
      phone: "09458370294",
      cell: "09252276186",
      name: "aung aung",
    },
    {
      id: 3,
      image: "https://rb.gy/cckoge",
      phone: "09407977649",
      cell: "09266588694",
      name: "ma ma",
    }
  ];

  let [count, setCount] = useState(users.length);
  let [name, setName] = useState("mg mg");
  return (
    <div className="App">
      {/* <User image={users[0].image} phone={users[0].phone} cell={users[0].cell} name={users[0].name}/>
        <User image={users[1].image} phone={users[1].phone} cell={users[1].cell} name={users[1].name}/>
        <User image={users[2].image} phone={users[2].phone} cell={users[2].cell} name={users[2].name}/> */}
      {/* <User data={users[0]} />
        <User data={users[1]} />
        <User data={users[2]} /> */}

      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setCount(++count);
          setName(name === "mg mg" ? "anug aung" : "mg mg");
        }}
      >
        change
      </button>

      {
         users.map((user) => {
          return <User data={user} key={user.id} />
         })
      }
    </div>
  );
}

export default App;
