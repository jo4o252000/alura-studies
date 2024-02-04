import React from "react"
import style from './clock.module.scss'

interface Props{
    time:number | undefined
}

export default function Clock({time = 0}:Props){

    const [minuteTen, minuteUnit] = String(Math.floor(time/60)).padStart(2, '0')//se o valor de minuto for entr 1 e 9 que tem um lenght menor que 2 ele vai adicionar 0 no inicio da string (padStart("comprimento minimo da string", "O que vai ser adicionar caso o comprimeiro sejá menor do que foi informado"))
    const [secondsTen , secondsdUnit] = String(time % 60).padStart(2, '0')
    return(
        <React.Fragment>
            <span className={style.relogioNumero}>{minuteTen}</span>
            <span className={style.relogioNumero}>{minuteUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsTen}</span>
            <span className={style.relogioNumero}>{secondsdUnit}</span>
        </React.Fragment>
    )
}