import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
  };

  static defaultProps = {
    name: "Zina Sen",
    email: "zs@gmail.com",
    phone: "9234672343",
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="mb-3  ">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-md"
                placeholder="Enter Name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="form-control form-control-md"
                placeholder="Enter Email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-md"
                placeholder="Enter Phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <div class="d-grid gap-2">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
