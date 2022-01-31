import React, { Component } from "react";
import axios from "axios";

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
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
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

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
