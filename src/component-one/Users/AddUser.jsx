import { useState } from "react";

const AddUser = (props) => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cell, setCell] = useState("");
    const [userId, setUserId] = useState("");
    
    const imageFun = (event) => {
        setImage(event.target.value)
    }
    const nameFun = (event) => {
        setName(event.target.value)
    }
    const phoneFun = (event) => {
        setPhone(event.target.value)
    }
    const cellFung = (event) => {
        setCell(event.target.value)
    }
    const idFun = (event) => {
        setUserId(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let userData = {
            image: image,
            name: name,
            phone: phone,
            cell: cell,
            userId: userId,
        }
        props.addUser(userData);
    }

    const formStyle = {
        backgroundColor: "black",
        padding: "20px",
  };
  return (
    <form onSubmit={submitHandler} style={formStyle} className="mt-3 text-white">
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          aria-describedby="emailHelp"
          onChange={imageFun}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          onChange={nameFun}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input type="number" className="form-control" id="phone" onChange={phoneFun} required autoComplete="on" />
      </div>
      <div className="mb-3">
        <label htmlFor="cell" className="form-label">
          Cell
        </label>
        <input type="number" className="form-control" id="cell" onChange={cellFung} autoComplete="on" required />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Id
        </label>
        <input type="text" className="form-control" id="userId" onChange={idFun} autoComplete="on" required />
      </div>
      <div className="clearfix">
        <button type="submit" className="btn btn-primary btn-sm float-end">
          Create
        </button>
      </div>
    </form>
  );
};

export default AddUser;
