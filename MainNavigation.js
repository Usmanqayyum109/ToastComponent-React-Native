import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import CommonNavigation from './CommonNavigation';
import {useSelector} from 'react-redux';
import {configAxiosHeaders} from '../API/ApiCalls';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import NavigationSevice from './NavigationSevice';

const mainStack = createNativeStackNavigator();

function MainNavigation() {
  const user = useSelector(state => state.UserReducer);

  useEffect(() => {
    configAxiosHeaders(user?.token);
  }, [user]);

  return (
    <NavigationContainer
      ref={ref => NavigationSevice.setTopLevelNavigator(ref)}>
      <mainStack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <mainStack.Screen name="SplashScreen" component={SplashScreen} />
        <mainStack.Screen name="AuthNavigation" component={AuthNavigation} />
        <mainStack.Screen
          name="CommonNavigation"
          component={CommonNavigation}
        />
      </mainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
