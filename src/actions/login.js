import {BASE_URL, LOGIN_STUDENT, FAILED_LOGIN} from "./types"

export const login = (formData, ownProps) => {
    return (dispatch) => {
        return fetch(`${BASE_URL}/api/v1/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.status === 200){
              dispatch(
                {
                  type: LOGIN_STUDENT,
                  user: data.user.data.attributes,
                },
              )
            } else if (data.status === 500){
              dispatch(
                {
                  type: FAILED_LOGIN,
                  passwordError: data.passwordError
                },
                ownProps.history.push("/login")
              );
            } else if (data.status === 501){
              dispatch(
                {
                  type: FAILED_LOGIN,
                  emailError: data.email_error[0]
                },
                ownProps.history.push("/login")
              );
            }
          });
      };
}