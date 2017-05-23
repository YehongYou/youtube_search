import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
     super(props)
     this.state = {term: ''};
  }

  onInputChange(value) {
    this.setState({term:value});
    this.props.onSearchTermChange(value);
  }

  render(){
    return (
     <div className="search-bar">
      <input
        value={this.state.term}
        onChange={(event)=>this.onInputChange(event.target.value)}
        />
     </div>
    )
  }
}

export default SearchBar;
