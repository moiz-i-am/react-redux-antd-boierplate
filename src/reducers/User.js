const initialState = {
  success: false,
  login: false,
  loading: false,
  error: null,
  loggedIn: false,
  currentUser: {
    data: null,
    loading: false,
    error: null,
  },
  users: {
    data: [],
    pagination: {},
    loading: false,
    error: null,
  },
};

const userReducer = (
  state = initialState,
  { obj, type, error, payload, data, pagination }
) => {
  switch (type) {
    case "RESET_USER":
      return initialState;

    case "SIGNUP":
    case "LOGIN":
    case "LOGOUT":
      return {
        ...state,
        ...initialState,
        type,
        loading: true,
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        signUpSuccess: true,
        type,
        payload,
        currentUser: {
          ...state.currentUser,
          loading: false,
          error: null,
        },
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        ...initialState,
        type,
        loading: false,
        loggedIn: false,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        login: true,
        success: true,
        loading: false,
        type,
        payload,
        loggedIn: true,
        currentUser: {
          ...state.currentUser,
          loading: false,
          data,
        },
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        error,
        success: false,
        loading: false,
        type,
        currentUser: {
          ...state.currentUser,
          loading: false,
          error,
        },
      };

    case "SIGNUP_FAIL":
    case "LOGOUT_FAIL":
      return {
        ...state,
        error,
        success: false,
        loading: false,
        type,
      };

    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: true,
          error: null,
          data: null,
        },
      };

    case "GET_CURRENT_USER_SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
        type,
        payload,
        loggedIn: true,
        currentUser: {
          ...state.currentUser,
          data: data,
          loading: false,
        },
      };
    // return console.log("data in redux me =======++> ", data);

    case "GET_CURRENT_USER_FAIL":
      return {
        ...state,
        loggedIn: false,
        currentUser: {
          ...state.currentUser,
          loading: false,
          error,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
