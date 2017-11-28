import React from 'react';
import { withStyles } from 'material-ui/styles';
import { TableHead, TableRow, TableCell } from 'material-ui/Table';

const styles = theme => {
    root: {
        fontSize: '24px'
    }
}

const THead = (props) =>{
    const { classes } = props
    return (
        <TableHead>
            <TableRow className={classes.root}>{props.type}</TableRow>
            <TableRow>
                <TableCell>Ranking</TableCell>
                <TableCell>Angler</TableCell>
                <TableCell>Weight</TableCell>
            </TableRow>
        </TableHead>
        )
}
export default withStyles(styles)(THead);