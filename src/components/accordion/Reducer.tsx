type actionType = {
    type: string;
}

export const COLLAPSED = "Switch-Collapsed";

type StateType = {
    collapsed: boolean;
}

export const reducer = (state: StateType, action: actionType): StateType => {
    switch (action.type) {
        case COLLAPSED:
            return { //Or like that
                ...state,
                collapsed: !state.collapsed
            }
            // const stateCopy = {...state};// You can write it like that

            // stateCopy.collapsed = !stateCopy.collapsed;
            // return stateCopy
        default: 
        throw new Error('Bad action type')
    }
    return state;
}