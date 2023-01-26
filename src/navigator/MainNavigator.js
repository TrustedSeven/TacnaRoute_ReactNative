import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SuccessScreen from '../container/success';


const Stack = createNativeStackNavigator();

const MainNavigator = ({ parentNavigator }) => {
    
    return (
        <NavigationContainer>
            <>
                <Stack.Navigator
                    initialRouteName={'Splash'} 
                    screenOptions={{ headerShown: false }}
                >
                                <>
                                
                                <Stack.Screen name="Success" component={SuccessScreen} />
                                </>
                            
                    
                </Stack.Navigator>
            </>
        </NavigationContainer>
    );
};

export default MainNavigator;