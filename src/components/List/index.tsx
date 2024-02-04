import style from './list.module.scss'
import Item from "./item";
import { ITasks } from '../../types/task';

interface Props{
    tasks:ITasks[]
    selectedTask: (taskIsSelected:ITasks) => void //Casso não retorna nada, retornamos void
}

function Lista ({tasks, selectedTask}:Props){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Etudos do dia</h2>
            <ul>
               {tasks.map(task => <Item selectedTask={selectedTask} key={task.id} {...task}/> )}
            </ul>
        </aside>
    )
}

export default Lista