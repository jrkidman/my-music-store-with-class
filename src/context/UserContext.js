import { useState, createContext, useContext } from 'react';

export const userContext = createContext();
export const useUserContext = () => useContext(userContext);

function UserContextProvider(props) {
  const { children } = props;
  const userInitialState = undefined;
  const [user, setUser] = useState(userInitialState);
  const signIn = (userData) => setUser(userData);
  const signOut = () => setUser(userInitialState);

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
