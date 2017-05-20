import React, {Component} from 'react'

// // const SearchBar = () => {
// //   return <input />
// // }

// // export default SearchBar;

// class SearchBar extends Component{
//   render(){
//   return <input onChange={this.onInputChange} />
// }

// onInputChange = (event) => {
//   console.log(event.target.value);
// }
// }

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};
  }

  onInputChange(term)
  {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


  render(){
   return (
           <div className = "search-bar">
            <input value = {this.state.term}
            onChange = {event => this.onInputChange(event.target.value)} />
           <hr/>
           </div>
           );
  }
}

export default SearchBar;
