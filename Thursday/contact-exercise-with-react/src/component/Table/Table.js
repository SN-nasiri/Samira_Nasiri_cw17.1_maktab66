import React, {Component} from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class Table extends Component {
    constructor(props) {
        super(props);
        this.id = 1;
    }

    renderTableRows() {
        return this.props.contact.map((item, index) => {
            console.log(this.props)
            return (
                
            <tr>
                <td>{index+1}</td>
                <td>{item?.firstName}</td>
                <td>{item.lastName || ""}</td>
                <td>{item.email || ""}</td>
                <td>{item.phone || ""}</td>
                <td>{item.gender || ""}</td>
                <td>{item.country || ""}</td>
                <td>
                    <Button variant="info" onClick={()=>this.props.deleteRow(index)}>Delete</Button>
                </td>
            </tr>
            )
        })
    }

    render() { 
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        );
    }
}
 
export default Table;