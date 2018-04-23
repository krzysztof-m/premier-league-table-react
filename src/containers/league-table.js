import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchData } from '../actions';

class LeagueTable extends Component {
    componentDidMount() {
        this.props.fetchData();
    }
    
    render() {
        return (
            <div>LeagueTable</div>
        );
    }
}

export default connect(null, { fetchData })(LeagueTable);