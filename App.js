import { createStackNavigator, createAppContainer } from 'react-navigation';
//LOCAL
import Splash from './src/Splash';

const stackNavigator = createStackNavigator({
    Splash: { screen: Splash }
}, { headerMode: 'none' });

export default createAppContainer(stackNavigator);