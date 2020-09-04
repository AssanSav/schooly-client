import {BASE_URL, LOGIN_STUDENT} from "./types"

export const loginStudent = (formData) => {
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
            data.status !== 500
              ? dispatch(
                  {
                    type: LOGIN_STUDENT,
                    user: data.user.data.attributes,
                    interests: data.interests,
                  },
                )
              : dispatch(
                  {
                    type: FAILED_LOGIN,
                    emailError: data.email_error,
                    passwordError: data.passwordError,
                  },
                  ownProps.history.push("/login")
                );
          });
      };
}