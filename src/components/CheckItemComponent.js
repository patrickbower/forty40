import * as React from "react";
import '../css/checkitem.css';


export default class CheckItemComponent extends React.Component {

  // hyphenate = (e: React.FormEvent<HTMLInputElement>) => {  
  hyphenate() {
    return this.props.name.replace(/\s+/g, '-').toLowerCase();
  }

  render() {
    const hyphenatedName = this.hyphenate();
    return (
      <div className="flex items-center mb2">
        <label htmlFor={hyphenatedName} className="lh-copy">
          <input
            className={"mr2 dn checkbox " + (this.props.done ? "checked" : "")}
            type="checkbox" 
            id={hyphenatedName}
            defaultValue={hyphenatedName}
          />
          <div className="dib br-100 checkcircle" />
          <div className="item">
            <a href={this.props.link} className="no-underline dark-gray" target="_blank">
              {this.props.name}
            </a>
          </div>
        </label>
      </div>
    )
  }
}