import React from "react";
import Button from "../Button";
import style from './form.module.scss'
import { ITasks } from "../../types/task";
import {v4 as uuidv4} from 'uuid'

class Form extends React.Component<{setTask: React.Dispatch<React.SetStateAction<ITasks[]>>}>
{
    state = {
        taskName: "",
        time:"00:00"
    }
    addTasks(event:React.FormEvent){
        event?.preventDefault()
        this.props.setTask(oldTask => [...oldTask, {...this.state, isSelected:false, completed:false, id:uuidv4()}])
        console.log(this.state)
        this.setState({taskName:"", time:"00:00"})
    }
    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.addTasks.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input  value={this.state.taskName} onChange={event => this.setState({...this.state, taskName:event.target.value})} type="text" name="task" id="task" placeholder="O que você quer estudar" required/>

                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input value={this.state.time} onChange={event => this.setState({...this.state, time:event.target.value})} type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required/>
                </div>
                <Button text="Adicionar"/>
            </form>
        )
    }
}


export default Form