import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

import { setSearchFieldAction, requestRobotsAction } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.search.searchField,
        robots: state.request.robots,
        isPending: state.request.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value)),
        onRequestRobots: () => dispatch(requestRobotsAction())
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);