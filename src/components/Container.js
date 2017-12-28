import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Table, { TableBody,
TableHead,
TableRow,
TableCell } from 'material-ui/Table';
import * as anglerActions from '../actions/angler_actions';

const styles = theme => ({
    root: {
        width: '100%',
        margin: '0 auto',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        minWidth: 700,
        maxWidth: 1400
    },
    title: {
        textAlign: 'center',
        color: '#666'
    }

});


const createTable = (fish, classes, title) => (
    <Paper className={classes.root}>
        <div className={classes.title}><h3>{title}</h3></div>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Ranking</TableCell>
                    <TableCell>Angler</TableCell>
                    <TableCell numeric>Weight</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fish && fish.slice(0,5).map(j
                            <TableCell>{k + 1}</TableCell>
                            <TableCell>{n.angler}</TableCell>
                            <TableCell numeric>{n.weight}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Paper>
);

class Container extends Component{
    componentDidMount() {
        this.props.actions.fetch_anglers()
    }


    render (){

        const {blue, channel, flathead, classes} = this.props;

        return (
            <div>
                {blue && createTable(blue, classes, 'Blue Catfish')}
                {channel && createTable(channel, classes, 'Channel Catfish')}
                {flathead && createTable(flathead, classes, 'Flathead Catfish')}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flathead: state.anglers.flathead,
        channel: state.anglers.channel,
        blue: state.anglers.blue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(anglerActions, dispatch)
    }
}

const Leaders = connect(mapStateToProps, mapDispatchToProps)(Container);
export default withStyles(styles)(Leaders);