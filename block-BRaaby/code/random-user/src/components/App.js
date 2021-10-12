import React from 'react';
import '../stylesheets/App.css';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
    }
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then((data) => this.setState({data}))
  }

  handleClick = (person) => {
    this.setState ({
      data : {person}
    })
  }

  render() {
    if(!this.state.data) {
      return (
        <Loader />
      )
    }
    return (
      <div>
        {
          this.state.data.results.map((person) => {
            return (
              <div className="card" key={person.name}>
                  <div>
                      <img className="image" src={person.picture.large} />
                  </div>
                  <div>
                    <button onClick={() => this.handleClick(person)}>RANDOM USER</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
