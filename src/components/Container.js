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
        return this.props.flat.map((fish, index) => {
            return <FishItem key={fish.id} fish={fish} ranking={index+1}/>
        })
    }

    channelList() {
        return this.props.channel.map((fish, index) => {
            return <FishItem key={fish.id} fish={fish} ranking={index+1} />
        })
    }
    render (){
        return (
            <Paper>
            <Table>
                <THead type={'Blue Catfish'}/>
                <TableBody>
                {this.props.blue ? this.blueList() : null}
                </TableBody>
            </Table>
            <Table>
                <THead type={'Flathead Catfish'}/>
                <TableBody>
                {this.props.flat ? this.flatList() : null}
                </TableBody>
            </Table>
            <Table>
                <THead type={'Channel CatFish'}/>
                <TableBody>
                {this.props.channel ? this.channelList() : null}
                </TableBody>
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