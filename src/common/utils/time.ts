export function timeToSeconds(time:string){
    const [hour = '0', minutes = '0', seconds = '0'] = time.split(":")

    const hourToSeconds = Number(hour) * 3600
    const minutesToSeconds = Number(minutes) * 60 
    return hourToSeconds + minutesToSeconds + Number(seconds)
}