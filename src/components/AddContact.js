import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone:"",
    DOB:"",
    address:""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""|| this.state.phone === "" ||this.state.DOB === "" ||this.state.address === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" ,phone:""});
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone No</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className="field">
            <label>DOB</label>
            <input
              type="date"
              name="DOB"
              placeholder="DOB "
              value={this.state.DOB}
              onChange={(e) => this.setState({ DOB: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="address "
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
