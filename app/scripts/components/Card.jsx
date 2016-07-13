import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  clickDelete = (e) => {
    const tripId = this.props.details.id;
    this.props.deleteTrip(tripId, e);
  }

  render() {
    const trip = this.props.details;
    var hasVisited = trip.visited ? 'Done' : 'On the list';
    var hasVisitedClass = trip.visited ? 'trip__status trip__status--complete' : 'trip__status trip__status--incomplete'
    return (
        <ul className="trip">
          <li><button className="trip__delete" onClick={this.clickDelete}>X</button></li>
          <li className="trip__city">{trip.city}</li>
          <li className="trip__country">{trip.country}</li>
          <a className={hasVisitedClass} onClick={this.markTrip}>{hasVisited}</a>
          <img className="trip__image" src={trip.image} />
        </ul>
    )
  }
  
  markTrip = () => {
    this.props.changeVisited(this.props.index);
  }
}