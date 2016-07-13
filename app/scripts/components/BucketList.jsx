import React from 'react';
import Card from './Card.jsx';

export default class BucketList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderCard = (key) => {
    const trip = this.props.details[key];
    return (
        <Card key={key} index={key} details={trip} changeVisited={this.props.changeVisited} showTrip={this.props.showTrip} deleteTrip={this.props.deleteTrip} />
      )
  }
    
  render() {
    return (
      <ul className="bucket-list">
        {Object.keys(this.props.details).map(this.renderCard)}
      </ul>
    )
  }
}