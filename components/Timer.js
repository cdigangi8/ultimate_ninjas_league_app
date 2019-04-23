import React, { PropTypes, Component } from 'react';
import '../style/stopwatch.css';

import timeFormat from '../controllers/timeFormat';

class Timer extends Component {

//   static proptTypes = {
//     time : PropTypes.number
//   };

  static defaultProps = {
    time : 0
  };

  render() {
    const { time } = this.props;

    return (
      <div className="Timer">
        { timeFormat( time ) }
      </div>
    );
  }
}

export default Timer;