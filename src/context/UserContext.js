import {
  useState, createContext, useContext, useReducer,
} from 'react';

export const userContext = createContext();
export const useUserContext = () => useContext(userContext);

// REDUCER
// takes the current state and an action as arguments, every time an action is dispatched
// whatever the reducer returns becomes the new state
const reducer = (state, action) => {
  if (action.type === 'sign-in') {
    return { ...action.payload.userData };
  }

  if (action.type === 'sign-out') {
    return { undefined };
  }

  return state;
};

function UserContextProvider(props) {
  const { children } = props;
  const userInitialState = undefined;

  const [user, dispatch] = useReducer(reducer, userInitialState);

  const signIn = (userData) => dispatch({ type: 'sign-in', payload: { userData } });
  const signOut = () => dispatch({ type: 'sign-out' });

  // const [user, setUser] = useState(userInitialState);
  // const signIn = (userData) => setUser(userData);
  // const signOut = () => setUser(userInitialState);

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
