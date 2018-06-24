import * as React from "react";
import './checkitem.css';

interface Props {
  name: string;
  // age?: number;
}

interface State {
  toggle: boolean
}

export default class CheckItemComponent extends React.Component<Props, State> {

  public state: State = {
    toggle: false
  }

  constructor (props: Props){
    super(props);
  }

  // hyphenate = (e: React.FormEvent<HTMLInputElement>) => {  
  public hyphenate() {
    return this.props.name.replace(/\s+/g, '-').toLowerCase();
  }

  public render() {
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