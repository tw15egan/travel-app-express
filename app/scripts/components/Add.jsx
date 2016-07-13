import React from 'react';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form className="form" onSubmit={this.createTrip} ref="tripForm" >
        <fieldset>
          <label className="form__label" htmlFor="city">City</label>
          <input className="form__input" ref="city" id="city" type="text" placeholder="Enter a city" />
        </fieldset>
        <fieldset>
          <label className="form__label" htmlFor="country">Country</label>
          <input className="form__input"ref="country" id="country" type="text" placeholder="Enter a country" />
        </fieldset>
        <fieldset>
          <label className="form__label" htmlFor="image">Image</label>
          <input className="form__input" ref="image" id="image" type="text" placeholder="Enter an image URL" />
        </fieldset>
        <fieldset>
          <button className="form__button" type="submit">+</button>
        </fieldset>
      </form>
    )
  }
  
  createTrip = (event) => {
    event.preventDefault();
    console.log(event.target);
    var trip = {
      city: this.refs.city.value,
      country: this.refs.country.value,
      image: 'https://unsplash.it/300/200',
      visited: false
    }
    
    this.props.addTrip(trip);
    this.refs.tripForm.reset();
  }
}