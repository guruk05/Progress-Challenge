import React, { Component } from "react";
import "./home.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    // State

    this.state = {
      data: [
        {
          movieName: ""
        }
      ],
    };
  }

//   Lifecycle method for fetching the data initially 

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8000/movieLists");
      let datas = await response.data;
      this.setState({data:datas});
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

//   Render method for rendering home Component

  render() {
    return <div>
        <div>
        {this.state.data.map(i => {
          return (
            <p style={{ flex: 1 }} className="message">
              <Toast
                className="toast"
                style={{ display: "flex", flexDirection: "row" }}
                style={{ height: "30rem" }}
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">
                    <h6>
                      <br />
                      {i.movieName}
                    </h6>
                  </strong>
                  {i.yearOfRelease}
                </Toast.Header>
                <div>
                  <Toast.Body>Actor : {i.actor}</Toast.Body>
                  <hr />
                  <Toast.Body>Directed by : {i.director}</Toast.Body>
                  <hr />
                  <Toast.Body>
                    Producer : {i.producer} 
                  </Toast.Body>
                  <hr />
                  <Toast.Body>
                    Review : {i.review} 
                  </Toast.Body>
                  <hr />
                </div>
              </Toast>
            </p>
          );
        })}
      </div>
    </div>;
  }
}

export default Home;
