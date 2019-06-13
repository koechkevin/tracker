import React, { Component } from 'react';

class Stats extends Component {
  render() {
    const {
      activeName, data: {
        totals: {
          channel, response, dm, Sync, multiDm,
        },
      },
    } = this.props;
    return (
      <div className="user-stats" name={`Statistics for ${activeName}`}>
        <div className="stat">
          <span> Begin channel conversations</span>
          <span>{channel}</span>
        </div>
        <div className="stat">
          <span> Response to channel posts</span>
          <span>{response}</span>
        </div>
        <div className="stat">
          <span> Direct message to FTL</span>
          <span>{dm}</span>
        </div>
        <div className="stat">
          <span>One on one syncs with FTL</span>
          <span>{Sync}</span>
        </div>
        <div className="stat">
          <span>Group direct message contributions</span>
          <span>{multiDm}</span>
        </div>
      </div>
    );
  }
}
export default Stats;
