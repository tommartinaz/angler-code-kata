import React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

const FishItem = (props) =>{
    const { angler, weight } = props.fish
    return (
        <TableRow hover>
            <TableCell>{props.ranking}</TableCell>
            <TableCell>{angler}</TableCell>
            <TableCell>{weight}</TableCell>
        </TableRow>
    )
}
export default FishItem;