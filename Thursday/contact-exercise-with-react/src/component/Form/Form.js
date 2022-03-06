import React, {Component} from "react";
import Table from "../Table/Table";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.store = {}

        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.onChangeStore = this.onChangeStore.bind(this)
        this.deleteRow = this.deleteRow.bind(this)
    }

    onClickSubmit(e) {
        e.preventDefault()
        this.setState({data: [...this.state.data, {...this.store}]});

    }

    onChangeStore(e) {
        this.store[e.target.name] = e.target.value;
    }

    deleteRow(index) {
        this.setState({data: this.state.data.filter((item, idx)=> idx !== index)})
    }
    
    render() { 
        return (
            <div>
                <form>
                    <div className="input-box">
                        <label>First Name:
                            <input type="text" name="firstName" onChange={(e)=>this.onChangeStore(e)}/>
                        </label>
                    </div>
                    <div className="input-box">
                        <label>Last Name:
                            <input type="text" name="lastName" onChange={(e)=>this.onChangeStore(e)}/>
                        </label>
                    </div>
                    <div className="input-box">
                        <label>Email:
                            <input type="text" name="email" onChange={(e)=>this.onChangeStore(e)}/>
                        </label>
                    </div>
                    <div className="input-box">
                        <label>Phone Number:
                            <input type="tel" name="phone" onChange={(e)=>this.onChangeStore(e)}/>
                        </label>
                    </div>
                    <div className="input-box">
                        <label>Nationality:                   
                            <select name="country" onChange={(e)=>this.onChangeStore(e)}>
                                <option value="iran">Iran</option>
                                <option value="us">US</option>
                                <option value="uk">UK</option>
                                <option value="canada">Canada</option>
                            </select>
                        </label>
                    </div>
                    <div className="input-box">
                        <label className="radio">Gender:</label>
                        <input className="radio" type="radio" name="gender" value="male" onChange={(e)=>this.onChangeStore(e)}/>Male
                        <input className="radio" type="radio" name="gender" value="female" onChange={(e)=>this.onChangeStore(e)}/>Female
                    </div>
                    <button className="submit" type="submit" onClick={(e)=>this.onClickSubmit(e)}>Submit</button>
                </form>
                <Table 
                contact = {this.state.data}
                deleteRow = {this.deleteRow}
                 />
            </div>
        );
    }
}
 
export default Form;