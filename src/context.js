import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Rohit Roy",
        email: "rr@gmail.com",
        phone: "8328372984",
      },
      {
        id: 2,
        name: "Divya Singh",
        email: "ds@gmail.com",
        phone: "9367734643",
      },
      {
        id: 3,
        name: "Sara Williams",
        email: "sw@gmail.com",
        phone: "9328342984",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
