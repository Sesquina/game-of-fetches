import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      color: "",
      breed: "",
      gender: "",
      weight: "",
      formComplete: false,
    };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  onColorChange = (event) => {
    this.setState({
      color: event.target.value,
    });
  };

  onBreedChange = (event) => {
    this.setState({
      breed: event.target.value,
    });
  };
  onGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  onWeightChange = (event) => {
    this.setState({
      weight: event.target.value,
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      formComplete: true,
    });
    alert(
      `Your form has been submitted! We will contact you shortly to schedule a consultation for ${this.state.name}!`
    );
  };

  render() {
    return (
      <div className="App">
        {/* <div className='container'> */}
        <div className="left-div">
          <h2>Pawtastic</h2>
          <h4>
            We offer a range of preventative and wellness services - including
            exams, vaccinations, nutrition, and more. We can also treat your pet
            should they become sick from illness or injury. At this time, we do
            not see critical and/or emergency care, though there are several
            clinics we work with throughout the area that can provide these
            services if needed.
          </h4>
          <h3>Wellness Exams</h3>
          <h4>
            Preventative medicine is the key to keeping your pet happy and
            healthy. We believe that all pets should undergo a comprehensive
            wellness exam annually, which focuses on all body systems and helps
            us identify health conditions in your pet before they become
            difficult and expensive to treat. These exams enable us to create an
            overall picture of your pet's health status, combining aspects of
            your pet's at home routine and history with physical exam findings
            to create straightforward recommendations for your pet's continued
            wellbeing.
          </h4>

          {/* <img src='./assets/dog.png' alt="image of dig"/> */}
        </div>

        <div className="right-div">
          <h2>Schedule a Consultation for Your Pup</h2>
          <form className="pup-form">
            <label>Name</label>
            <input
              type="name"
              placeholder="Yako"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <label>Age</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.onAgeChange}
            />
            <label>Color</label>
            <input
              type="text"
              placeholder="Brown"
              value={this.state.color}
              onChange={this.onColorChange}
            />
            <label>Breed</label>
            <input
              type="text"
              placeholder="Labrador"
              value={this.state.breed}
              onChange={this.onBreedChange}
            />
            <label>Weight</label>
            <input
              type="name"
              placeholder="in lbs"
              value={this.state.weight}
              onChange={this.onWeightChange}
            />
            <label>Gender</label>
            <input
              type="text"
              placeholder="Female"
              value={this.state.gender}
              onChange={this.onGenderChange}
            />
            <button
              className="btn btn-primary btn-sm m-2"
              type="submit"
              onClick={this.submitForm}
            >
              Submit
            </button>
          </form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
