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

  handleClick = () => {
    this.setState ({
      data : this.componentDidMount()
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
                    <h2 className="name_heading">My name is</h2>
                    <h1 className="name">{person.name.first + person.name.last}</h1>
                    <div className="email_div">
                      <h2 className="name_heading">My Email is</h2>
                      <h1 className="name">{person.email}</h1>
                    </div>

                  </div>
                  <div className="icon_div">
                     <span className="email_i"> <i class="fas fa-envelope"></i></span>
                      <i class="fab fa-magento"></i>
                      <i class="fas fa-map"></i>
                      <i class="fas fa-phone"></i>
                      <i class="fas fa-lock"></i>
                  </div>
                  <div>
                    <button className="btn" onClick={this.handleClick}>RANDOM USER</button>
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
