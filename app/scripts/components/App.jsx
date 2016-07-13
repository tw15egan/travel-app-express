import uuid from 'node-uuid';
import React from 'react';
import BucketList from './BucketList.jsx';
import Add from './Add.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bucketList: [
        {
          id: uuid.v4(),
          city: 'New York City',
          country: 'USA',
          image: 'img/nyc.jpg',
          visited: true
        },
        {
          id: uuid.v4(),
          city: 'Paris',
          country: 'France',
          image: 'img/paris.jpg',
          visited: true
        },
        {
          id: uuid.v4(),
          city: 'Kuala Lumpur',
          country: 'Malaysia',
          image: 'img/kuala.jpg',
          visited: false
        }
      ]
    }
  }
  
  render() {        
    return (
      <div className="main">
        <header>
          <h1>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC40IDQ4OC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguNCA0ODguNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxwYXRoIGQ9Ik00NjEuMiw4NS41YzAtNTguNC0xMTIuNy04NS41LTIxNy04NS41cy0yMTcsMjYuMS0yMTcsODQuNWMwLDAuMiwwLDMxOC43LDAsMzE4LjdjMCw1OC4yLDExMi4xLDg1LjIsMjE2LDg1LjIgICBjMTAwLjgsMCwyMDkuMy0yNS40LDIxNy41LTgwLjFjMC4zLTEuMywwLjUtMi42LDAuNS00Vjg1LjVDNDYxLjIsODUuNiw0NjEuMiw4NS41LDQ2MS4yLDg1LjV6IE00MTkuNiw0MDMuMkw0MTkuNiw0MDMuMiAgIGMwLDEzLjUtNjEuMyw0NC42LTE3NS40LDQ0LjZTNjguOCw0MTUuNyw2OC44LDQwMy4yVjEzNy41YzEwLjksNS43LDIzLjUsMTAuNiwzNy40LDE0Ljh2MTA0LjZjMCwxMS40LDkuMywyMC44LDIwLjgsMjAuOCAgIHMyMC44LTkuMywyMC44LTE5Ljd2LTk1LjljMTIuNCwyLjIsMjUuMywzLjksMzguNCw1LjJ2NTMuM2MwLDExLjQsOS4zLDIwLjgsMjAuOCwyMC44YzExLjQsMCwyMC44LTkuMywyMC44LTIwLjh2LTUwLjcgICBjNS41LDAuMiwxMS4xLDAuMiwxNi42LDAuMmM4LjMsMCwxNi42LTAuMiwyNC45LTAuNXY5OS44YzAsMTEuNCw5LjMsMjAuOCwyMC44LDIwLjhzMjAuOC04LjMsMjAuOC0xOS43di0xMDQgICBjNDIuMS00LjcsODEuMi0xNCwxMDktMjguM3YyNjVINDE5LjZ6IE0yNDQuMiwxMzAuNGMtMTE0LjcsMC0xNzYuMy0zMS4zLTE3Ni4zLTQ0LjlzNjIuNi00NC44LDE3Ni4zLTQ0LjhTNDIwLjUsNzIsNDIwLjUsODUuNiAgIFMzNTguOSwxMzAuNCwyNDQuMiwxMzAuNHoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            Bucket List
          </h1>

          <Add addTrip={this.addTrip} />
        </header>

        <BucketList details={this.state.bucketList} changeVisited={this.changeVisited} deleteTrip={this.deleteTrip} />
      </div>
    );
  }
  
  deleteTrip = (id, e) => {
    e.stopPropagation();
    
    this.setState({
      bucketList: this.state.bucketList.filter(trip => trip.id !== id)
    });
  }
  
  addTrip = (trip) => {
    this.setState({
      bucketList: [...this.state.bucketList, {
        id: uuid.v4(),
        city: trip.city,
        country: trip.country,
        image: trip.image,
        visited: trip.visited
      }]
    })
  }
  
  changeVisited = (key) => {
    const trip = this.state.bucketList[key];
    
    if (trip.visited === true) {
      trip.visited = false;
    } else {
      trip.visited = true;
    }
    
    this.setState({bucketList: this.state.bucketList})
  }
}

