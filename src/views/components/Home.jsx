import React from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import actions from '../redux/actions/index';
import User from './User';
import Form from './Form';
import Stats from './Stats';
import DailyStats from './DailyStats';

const initialState = {
  channel: 0,
  response: 0,
  dm: 0,
  multiDm: 0,
  Sync: 0,
  date: '',
};

class Home extends React.Component {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  state = { ...initialState, active: 0, isLoading: false };

  click = (e) => {
    const { getSingleUserStats, users } = this.props;
    this.setState({
      active: e.target.id,
    });
    getSingleUserStats(users[e.target.id].id);
  };

  submit = (e) => {
    const { createEntry, users } = this.props;
    const { active } = this.state;
    this.setState({
      isLoading: true,
    });
    e.preventDefault();
    createEntry(
      { ...this.state, userId: users[active].id }, () => {
        this.setState({ ...initialState });
        toast.success('entry successfully created');
      }, () => this.setState({ isLoading: false }),
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      users, entries: { errors }, data,
    } = this.props;
    const { active, isLoading } = this.state;
    const activeId = users.length ? users[active].id : active;
    const activeName = users.length ? users[active].name : '';
    return (
      <div>
        <div className={`trip-${isLoading ? 'loading' : 'not-loading'}`}>
          <div id="trip-loader" />
        </div>
        <div className="home">
          <div className="list">
            {
            users.map((each, i) => (
              <User click={this.click}
                    key={each.id}
                    index={i}
                    active={activeId === each.id}
                    name={each.name}
              />
            ))
          }
          </div>
          <div className="bod">
            <Form
              errors={errors}
              activeName={activeName}
              onChange={this.handleChange}
              handleSubmit={this.submit}
              values={this.state}
          />
            <div className="stats">
              <Stats
                data={data}
                activeName={activeName}
              />
            </div>
            <DailyStats userEntries={data.entries} activeName={activeName}/>
          </div>
        </div>
      </div>
    );
  }
}

const { getAllUsers, createEntry, getSingleUserStats } = actions;
const mapStateToProps = ({
  reducer: { users }, entries,
  statistics: { data },
}) => ({
  users, entries, data,
});
export default connect(mapStateToProps, { getAllUsers, createEntry, getSingleUserStats })(Home);
