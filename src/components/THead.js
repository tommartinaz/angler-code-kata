import React from 'react';
import { TableHead, TableRow, TableCell } from 'material-ui/Table';


const THead = (props) =>{
    return (
        <TableHead>
            <TableRow>
                <TableCell>{props.type}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ranking</TableCell>
                <TableCell>Angler</TableCell>
                <TableCell>Weight</TableCell>
            </TableRow>
        </TableHead>
        )
}
export default THead;