import { useState } from 'react';
import {
    increment,
    decrement,
    selectCount,
    incrementByAmount
} from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount);

    return (
        <div>
            <div>
                <button
                label='Decrement Value'
                onClick={() => dispatch(decrement())}>-</button>&nbsp;
                <span>{count}</span>&nbsp;
                <button
                label='Increment Value'
                onClick={() => dispatch(increment())}>+</button>
            </div>
            <br />
            <div>
                <input 
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)} />&nbsp;&nbsp;
                <button onClick={() => dispatch(incrementByAmount(incrementValue))}>IncrementByAmount</button>
            </div>
        </div>
    )
}