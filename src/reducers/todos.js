const INITIAL_VALUE = []

export default function todos(state = INITIAL_VALUE, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [ ...state, { id: Math.random(), text: action.text } ]
        default:
            return state
    }
}

