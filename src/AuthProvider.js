import React, {createContext, useState, useEffect} from 'react';
import API from './services/API';
import {useMutation} from 'react-query';
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [data, setData] = useState();

  const {mutate: send} = useMutation(API.send, {
    onSuccess: data => {
      if (data.error == false) {
        setData(data);
      } else {
        console.log('error********');
      }
    },
    onError: data => {
      console.log('error==========');
    },
  });

  return (
    <AuthContext.Provider
      value={{
        data,
        send: async (params) => {
          if (params !== '') {
            const userCred = {
              params
            };
            await send(userCred);
            // console.log(params)
          } else {
            console.log('Error sending');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
