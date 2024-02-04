import { ITasks } from '../../../types/task'
import style from '../list.module.scss'

interface Props extends ITasks{
    selectedTask: (taskIsSelected:ITasks) => void //Casso não retorna nada, retornamos void
}

function Item({taskName, time, isSelected, completed, id, selectedTask}:Props){
    return(
        <li className={`${style.item} ${isSelected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} onClick={() => !completed && selectedTask({taskName, time, isSelected, completed, id})} >
            <h3>{taskName}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )

}

export default Item 
