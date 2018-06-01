import * as React from "react";

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
    return (
      <div className="flex items-center mb2">
        <input 
          className="mr2" 
          type="checkbox" 
          id={this.hyphenate()}
          defaultValue={this.hyphenate()} />
        <label htmlFor={this.hyphenate()} className="lh-copy">
          {this.props.name}
        </label>
      </div>
    )
  }
}