import { useState } from "react"
function Pause({props}){
    const [time,setTime] = useState(()=>{
        if(props.seconds === 0) return '00:00'
        else{
            let min = Math.floor(props.seconds/60)
            let sec = props.seconds%60
            return `${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
        }
    })
    return <div>
            {time}
    </div>
}

export default Pause