import React,{Component} from 'react';
import Todoitem from "./todoitem";

export default class todolist extends Component{
    render(){

        const {items,clearList,handledelete,handleEdit}=this.props
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                    items.map(item =>{
                        return(
                            <Todoitem key={item.id}
                             title={item.title}
                             handledelete={()=>handledelete(item.id)
                             }
                             handleEdit={()=>handleEdit(item.id)
                             }/>
                        )
                    })
                }
                
                <button type="button" className="btn-danger btn-block mt-5"
                onClick={clearList}>Clear List</button>

                </ul>
        )
    };
    
}