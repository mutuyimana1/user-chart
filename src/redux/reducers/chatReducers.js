import { GET_CHATS, FAILED_TO_LOAD_CHATS } from "../actions/actionTypes";

const initialState = {}

export default function(state= initialState, action){
    const { type, payload } = action;
    switch(type) {
        case GET_CHATS:
            return {
                ...state,
                chats: payload.chats
            };

        case FAILED_TO_LOAD_CHATS:
            return {
                ...state,
                chats: payload
            };
        
            default:
                return state;
                

    }
}