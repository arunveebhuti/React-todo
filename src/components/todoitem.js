import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPenSquare } from '@fortawesome/free-solid-svg-icons'

export default class todoitem extends Component{
    render(){
        const {title, handledelete,handleEdit}= this.props


        return(
            <li className="list-group-item text-capitalize d-flex
            justify-content-between my-2">
                <h6>{title}</h6>
                
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faPenSquare} />
                    </span>
                    
                    <span className="mx-2 text-danger" onClick={handledelete}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                  
                </div>
            </li>
        )
    };
    
}