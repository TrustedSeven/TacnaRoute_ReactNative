import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../AuthProvider';
import LogInScreen from '../container/login';
import RegisterScreen from '../container/register';
import SuccessScreen from '../container/success';

const Stack = createNativeStackNavigator();

const MainNavigator = ({ parentNavigator }) => {
    const { userProfile } = useContext(AuthContext);
    const {config} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <>
                <Stack.Navigator
                    initialRouteName={'Login'} 
                    screenOptions={{ headerShown: false }}
                >
                    {
                        userProfile ?
                            (
                                <>
                                <Stack.Screen name="Success" component={SuccessScreen} />
                                </>
                            ) : (
                                <>
                                    {/* <Stack.Screen name="LogIn" component={LogInScreen} />
                                    <Stack.Screen name="Register" component={RegisterScreen} /> */}
                                    <Stack.Screen name="Success" component={SuccessScreen} />
                                </>
                            )
                    }
                </Stack.Navigator>
            </>
        </NavigationContainer>
    );
};

export default MainNavigator;