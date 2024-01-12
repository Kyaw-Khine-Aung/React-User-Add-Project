import { useState } from "react";

const Form = () => {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    const [info, setInfo] = useState({
        name: "",
        age: ""
    })
    const trackName = (event) => {
        // setName(event.target.value);
        setInfo({
            ...info,
            name: event.target.value
        })
    }

    const trackAge = (event) => {
        // setAge(event.target.value);
        setInfo({
            ...info,
            age: event.target.value
        })
    }
    const showData = (event) => {
        event.preventDefault();
        console.log(info.name)
        console.log(info.age)
    }
  return (
    //if we can use onSubmit event, we can click enter button or submit button
    <form onSubmit={showData}>
        <input type="text" placeholder="name" onChange={trackName}/>
        <input type="text" placeholder="age" onChange={trackAge}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form;