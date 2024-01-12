// 
import { useState } from "react";

function Student(props) {
  const [name, setName] = useState(props.name)
  const [age, setAge] = useState(props.age);
  const textChangeStart = () => {
    console.log(`before update ${name}`)
    console.log(`before update ${age}`)
    // name = "mgkhinthan"; //this line change value but not change UI, so we need use useState() hook method
    setName("mgkhinthan");
    setAge("50");
    
  }
  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <button onClick={textChangeStart}>change text</button>
    </ul>
  );
}

export default Student;
