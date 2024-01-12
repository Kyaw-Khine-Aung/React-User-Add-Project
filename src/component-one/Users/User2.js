  //parentကနိန် ပီးလိုက်တေ dataကို propsကနိန်တစ်ဆင့်လက်ခံလို့ရပိုင် object destructuringလုပ်ပီး လက်ခံလို့လဲရ
function User(props) {
  return (
    <div  style={{ maxWidth: "500px" }} className="mt-2">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center" style={{ maxWidth: "500px" }}>
            <div className="col-2">
              <img
                src={props.data.image}
                alt="cup"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col-3">
              <h5>{props.data.name}</h5>
            </div>
            <div className="col-5">
              <div style={{fontSize: "13px"}}>Phone: {props.data.phone}</div>
              <div style={{fontSize: "13px"}}>Cell: {props.data.cell}</div>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-danger">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
