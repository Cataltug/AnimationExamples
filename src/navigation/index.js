import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../screens';
import { createStaticNavigation } from '@react-navigation/native';


const MyStack = createNativeStackNavigator({

    screenOptions: {
        headerShown: false
    },
    screens: {
        Home: {
            screen: screens.Home,
            options: {
                headerShown: true,
                headerTitle: "Animation Examples",
                headerTintColor: "snow",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "dodgerblue",
                    
                }
            }
        },
        Reanimated: {
            screen: screens.Reanimated,
            options: {
                headerShown: true,
                headerTitle: "Reanimated",
                headerTintColor: "snow",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "dodgerblue",
                    
                }
            }
        },
        Challenge: {
            screen: screens.Challenge,
            options: {
                headerShown: true,
                headerTitle: "Challenge",
                headerTintColor: "snow",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "dodgerblue",
                    
                }
            }
        },
    }
})


export default createStaticNavigation(MyStack);