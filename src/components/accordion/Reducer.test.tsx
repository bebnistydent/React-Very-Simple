import { COLLAPSED, reducer, StateType } from "./Reducer";


test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }


    //action
    const newState = reducer(state, {type: COLLAPSED})


    //expectation
    expect(newState.collapsed).toBe(true);
})