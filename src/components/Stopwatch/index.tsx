import { useState, useEffect } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/task";
import Button from "../Button";
import Clock from "./clock";
import style from './stopWatch.module.scss'

interface Props {
    selected:ITasks | undefined
    finallyTask: () => void
}

function StopWatch({selected, finallyTask}:Props){
    const [time, setTime] = useState<number>()//tipando o state para number direto


    useEffect(() => {
        if(selected?.time){//se exitir o selected
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regressive(timer:number = 0){
        setTimeout(() => {
            if(timer > 0){
                setTime(timer - 1)
                return regressive(timer - 1)
            }
            finallyTask()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Ecolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => {regressive(time)}} text="Começar"/>
        </div>
    )
}

export default StopWatch