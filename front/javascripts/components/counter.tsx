import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterModule from '../modules/counter_module'

function Counter(): JSX.Element {
    const dispatch = useDispatch()
    const counter: number = useSelector((state: any) => state.counter)

    const incr = () => dispatch(counterModule.actions.increment())
    const decr = () => dispatch(counterModule.actions.decrement())

    return (
        <div>
            <h2>Sample Counter</h2>
            <p>{counter}</p>
            <button onClick={incr}>increment</button>
            <button onClick={decr}>decrement</button>
        </div>
    )
}

export default Counter
