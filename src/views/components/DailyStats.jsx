import React, { Component } from 'react';


const DailyStat = ({
  data: {
    channel, response, dm, Sync, multiDm, date,
  },
}) => (
  <div>
    <div className="day">{new Date(date).toDateString()}</div>
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
class DailyStats extends Component {
  render() {
    const { activeName, userEntries } = this.props;
    return (
      <div className="daily-stats" name={`Daily statistics for ${activeName}`}>
        {userEntries.map(entry => <DailyStat
          key={entry.id}
          data={entry}
        />)}
      </div>
    );
  }
}

export default DailyStats;
