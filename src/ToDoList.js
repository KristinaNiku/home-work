import {Component} from 'react';
import check from './check.png';
import lens from './lens.png';
export default class ToDoList extends Component{
    state={
        userInput:'',
        toDoList:[ ],
        image: lens
    }
onChangeEvent(e){
    this.setState({userInput: e});
    console.log(e)
}
addItem(input){
    if (input === ''){
        alert("Please, enter in item")
    }
    else{
   let listArray = this.state.toDoList;
   listArray.push(input)
   this.setState({toDoList: listArray, userInput: ''})
   console.log(listArray)
    }
    }
deleteItem(){
    let listArray= this.state.toDoList;
    listArray=[];
    this.setState({toDoList: listArray})
}
crossedWord(event){
    const li= event.target;
    li.classList.toggle('crossed');
}
lensClicked = () => {
    this.setState({image: check})
}
onFormSubmit(e){
    e.preventDefault()
}
    render(){
        return <div>
            <form onSubmit={this.onFormSubmit}>
         <div className='container' >
<input type="text" placeholder='write you tasks..'  onChange = {(e) => {this.onChangeEvent(e.target.value)}} value ={this.state.userInput}/>
</div>
<div className='container' >
< button className=' btn add'  onClick={ ()=> this.addItem(this.state.userInput) } >ADD</button>
</div>

<ul >
    {this.state.toDoList.map((item, index) => (
        <li   onClick={this.crossedWord} key= {index}>
            <img onClick={this.lensClicked}src={this.state.image} width="20px"/>
            {item}</li>
    )
    )}
    
</ul>

<div className='container' >
<button className='btn delete' onClick ={() => this.deleteItem()} >DELETE</button>
</div>
</form>
        </div>
    }
}
