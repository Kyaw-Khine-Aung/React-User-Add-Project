import Item from "./Item1";
import React, { useState } from "react";

const App1 = () => {
  const stateObj = {
    items: [
      { id: 1, name: "Apple", price: 0.99 },
      { id: 2, name: "Orange", price: 0.89 },
    ],
  };

  const nameRef = React.createRef();
  const priceRef = React.createRef();

  const [state, setStateObj] = useState(stateObj);
  const add = () => {
    let id = state.items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;
    // setStateObj({
    //   items: [...state.items, { id, name: `Item ${id}`, price: 0.01 * id }],
    // });
    setStateObj({
      items: [...state.items, { id, name, price }],
    });
  };

  return (
    <div>
      {/* <Item name={stateObj.item[0].name} price={stateObj.item[0].price}/>
        <Item name={stateObj.item[1].name} price={stateObj.item[1].price} /> */}
      <ul>
        {state.items.map((item) => (
          <Item name={item.name} key={item.id} price={item.price} />
        ))}
      </ul>
      <div className="form-floating">
        <input type="text" id="fruit" ref={nameRef} className="form-control w-25 mb-3" placeholder="Fruits Name" />
        <label htmlFor="fruit">Fruits Name</label>
      </div>
      <div className="form-floating">
        <input type="text" id="price" ref={priceRef} className="form-control w-25 mb-3" placeholder="Price" />
        <label htmlFor="price">Fruits Name</label>
      </div>
      <button onClick={add} className="btn btn-info">
        Add
      </button>
    </div>
  );
};

export default App1;
