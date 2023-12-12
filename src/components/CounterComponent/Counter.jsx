import React from 'react';
import { increment, decrement } from "../../store/slices/counter.slice";
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => { dispatch(increment()) }}>+</button>
                <button onClick={() => { dispatch(decrement()) }}>-</button>
            </div>
        </section>
    );
}

export default Counter;
