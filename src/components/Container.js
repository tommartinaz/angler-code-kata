import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import THead from './THead';
import FishItem from './FishItem';
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
        return this.props.blue.map((fish, index) => {
            return <FishItem key={fish.id} fish={fish} ranking={index+1} />
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
            <Paper>
            <Table>
                <THead type={'Blue Fish'}/>
                {this.props.blue ? this.blueList() : null}
            </Table>
            <Table>
                <THead type={'Flat Fish'}/>
                {this.props.flat ? this.flatList() : null}
            </Table>
            <Table>
                <THead type={'Channel Fish'}/>
                {this.props.channel ? this.channelList() : null}
            </Table>
            </Paper>
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