import { useDispatch, useSelector} from "react-redux";
import { increment } from "../../slices/counterSlice";

export const Counter =() =>{

    const dispatch = useDispatch();

    const count = useSelector(state => state.counter.count)
    console.log(count);
    

    const onUpClick = () =>{
        dispatch(increment());  
    }
    return(
        <>
            <button onClick={onUpClick}>UP</button>
            <span>{count}</span>
            <button>DOWN</button>
        </>
    );
}