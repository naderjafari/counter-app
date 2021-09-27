import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 1,
    imageURL: "https://picsum.photos/200",
    tags: ["tag-1", "tag-2", "tag-3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count++, ...this.state });
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageURL} alt="" />
        <span style={this.styles} className={this.getBadeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
