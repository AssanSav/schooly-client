import {LOGIN_STUDENT, FAILED_LOGIN} from "../actions/types"


const usersReducer = (state = {status: false, user: {}, emailError: "", passwordError: ""}, action ) => {
    const {
        user,
        emailError,
        passwordError,
        type
    } = action;
    switch (type) {

        case LOGIN_STUDENT:
            return {
                ...state,
                status: true,
                user: user,
            };
        
            case FAILED_LOGIN:
                return {
                  ...state,
                  passwordError: passwordError,
                  emailError: emailError,
                };

                default: {
                    return state;
                  }
    }
}

export default usersReducer