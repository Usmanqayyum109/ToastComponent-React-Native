import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import NavigationSevice from './NavigationSevice';

const mainStack = createNativeStackNavigator();

function MainNavigation() {

 

  return (
    <NavigationContainer
      ref={ref => NavigationSevice.setTopLevelNavigator(ref)}>
      <mainStack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <mainStack.Screen name="SplashScreen" component={SplashScreen} />
       
      </mainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
