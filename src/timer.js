import { useEffect, useState } from "react"
function Timer({props}){

    const [snds,setSec] = useState(props.seconds)
    const [time,setTime] = useState(()=>{
        if(props.seconds === 0) return '00:00'
        else{
            let min = Math.floor(props.seconds/60)
            let sec = props.seconds%60
            return `${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
        }
    })

    useEffect(()=>{
          var id =  setTimeout(()=>{
                if(snds-1 > -1){
                    let min = Math.floor((snds-1)/60)
                    let sec = (snds-1)%60
                    setTime(`${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`)
                    setSec(snds-1)
                    props.setSeconds(snds-1)
                }else{
                    props.setSeconds(0)
                    props.setPause(true)
                }
            },1000)
        return ()=>clearTimeout(id)
    },[snds])
    return <div>
            {time}
    </div>
}


export default Timer