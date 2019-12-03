import { createAppContainer, createStackNavigator } from 'react-navigation'

import WalletHome from 'App/Containers/WalletHome/WalletHome';
import CreateWallet from 'App/Containers/CreateWallet/CreateWallet';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import LeftDrawer from "./LeftDrawer"

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    // MainScreen: WalletHome,

    // WalletHome: { screen: WalletHome },
    // CreateWallet: { screen: CreateWallet },
    LeftDrawer: { screen: LeftDrawer },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: "LeftDrawer",
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
    swipeEnabled: false
  }
)

export default createAppContainer(StackNavigator)
