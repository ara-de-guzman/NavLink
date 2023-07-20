import { useState } from "react";
import { AiOutlineLock,AiOutlineUnlock } from "react-icons/ai";

const Lock = ({num}) => {
    const [lock,setLock] = useState(true);

    const lockHandle =  () => {
        setLock(!lock)
    }
return (
    <span className={`ml-${num}`}>
        {lock ? (<AiOutlineLock onClick={lockHandle}/>):(<AiOutlineUnlock onClick={lockHandle}/>)}
    </span>
  )
}

export default Lock;
