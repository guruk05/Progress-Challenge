import React from "react";
import axios from "axios";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, InputGroup, CardDeck, Button } from "react-bootstrap";
import "../../App.css";

class Movieform extends React.Component {
  constructor(props) {
    super(props);

    // state

    this.state = {
      movieName: "",
      actor: "",
      director: "",
      producer: "",
      yearOfRelease: "",
      review: ""
    };
  }

//   Method for handling change event

  handleChange = evt => {
    let movieName = evt.target.name;
    let actor = evt.target.name;
    let director = evt.target.name;
    let producer = evt.target.name;
    let yearOfRelease = evt.target.name;
    let review = evt.target.name;

    this.setState({ [movieName]: evt.target.value });
    this.setState({ [actor]: evt.target.value });
    this.setState({ [director]: evt.target.value });
    this.setState({ [producer]: evt.target.value });
    this.setState({ [yearOfRelease]: evt.target.value });
    this.setState({ [review]: evt.target.value });
  };

//   Method For Handling Submit

  handleSubmit = async evt => {
    evt.preventDefault();
    console.log(this.state);
    try {
      await axios.post("http://localhost:8000/moviePosts", {
        data: {
          movieName: this.state.movieName,
          actor: this.state.actor,
          director: this.state.director,
          producer: this.state.producer,
          yearOfRelease: this.state.yearOfRelease,
          review: this.state.review
        }
      });
      console.log("posted successfully");
      console.log(this.state.data);

    } catch (err) {
      console.log(err);
    }
  };

// Render method for Rendering the Form

  render() {
    return (
      <div>
        <form className="cards">
          <CardDeck style={{ width: "60rem" }}>
            <Card>
              
              <Card.Body>
                <Card.Title className="title">Add Movie</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label></Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">Movie</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="movieName"
                      name="movieName"
                      defaultValue={this.state.movieName}
                      onChange={this.handleChange}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label></Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">Starring</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      name="actor"
                      defaultValue={this.state.actor}
                      name="actor"
                      onChange={this.handleChange}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label></Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">Director</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      defaultValue={this.state.director}
                      name="director"
                      onChange={this.handleChange}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label></Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">
                        Producer
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      name="producer"
                      defaultValue={this.state.producer}
                      name="producer"
                      onChange={this.handleChange}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label></Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">
                        Year of release
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      name="yearOfRelease"
                      defaultValue={this.state.yearOfRelease}
                      name="yearOfRelease"
                      onChange={this.handleChange}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label></Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">
                        Review
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      defaultValue={this.state.review}
                      name="review"
                      onChange={this.handleChange}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>

                <Button className="formSubmitbtn" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </CardDeck>
        </form>
      </div>
    );
  }
}

export default Movieform;
