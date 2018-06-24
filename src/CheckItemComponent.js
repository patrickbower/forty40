import * as React from "react";
import './checkitem.css';


export default class CheckItemComponent extends React.Component {

  constructor (props){
    super(props);
  }

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
            className="mr2 dn checkbox" 
            type="checkbox" 
            id={hyphenatedName}
            defaultValue={hyphenatedName} 
          />
          <div className="dib mr4 br-100 checkcircle" />
          {this.props.name}
        </label>
      </div>
    )
  }
}