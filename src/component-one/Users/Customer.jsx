 function Customer(props) {
    const removeUserList = () => {
      props.remove(props.customer.id)// giving parameter
    }
    return (
      <div>
        <div className="card my-3">
          <div className="card-body">
            <div className="row align-items-center" style={{ maxWidth: "500px" }}>
              <div className="col-2">
                <img
                  src={props.customer.image}
                  alt="cup"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="col-3">
                <h5>{props.customer.name}</h5>
              </div>
              <div className="col-5">
                <div style={{fontSize: "13px"}}>Phone: {props.customer.phone}</div>
                <div style={{fontSize: "13px"}}>Cell: {props.customer.cell}</div>
              </div>
              <div className="col-2">
                <button className="btn btn-outline-danger" onClick={removeUserList}>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Customer;
  