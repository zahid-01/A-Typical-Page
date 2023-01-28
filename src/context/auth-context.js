import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoginInfo = localStorage.getItem('loggedInStatus');
    if (userLoginInfo === '1') setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('loggedInStatus', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('loggedInStatus', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
