import * as React from "react";

export default class CheckItemComponent extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="bg-black">
          <p className="f2 b white ma0 pt2 tr">{this.props.number + 1}</p>
        </div>
        <div>
          <p
            className={
              this.props.done
                ? "f2 b black ma0 pt2 strike"
                : "f2 b black ma0 pt2"
            }
          >
            <a
              href={this.props.link}
              className={
                this.props.done
                  ? "no-underline ma0 pt2 done"
                  : "no-underline ma0 pt2 black"
              }
              target="_blank"
            >
              {this.props.name}
            </a>
          </p>
        </div>
      </div>
    );
  }
}
