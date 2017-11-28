import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import THead from './THead'
import * as anglerActions from '../actions/angler_actions';

const styles = theme => {
    root: {
        width: '70%'
    }
}

class Container extends Component{
    componentDidMount() {
        this.props.actions.fetch_anglers()
    }

    blueList() {
        return this.props.blue.map(fish => {
            return <FishItem key={fish.id} fish={fish} />
        })
    }
    
    flatList() {
        return this.props.flat.map(fish => {
            return <FishItem key={fish.id} fish={fish} />
        })
    }

    channelList() {
        return this.props.channel.map(fish => {
            return <FishItem key={fish.id} fish={fish} />
        })
    }
    render (){
        return (
            <ul>
                {this.props.blue ? this.blueList() : null}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flat: state.anglers.flat,
        channel: state.anglers.channel,
        blue: state.anglers.blue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(anglerActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);