import { 
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const { Navigator } =createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const _layout = () => {
  return <MaterialTopTabs
   screenOptions={{
    tabBarIndicatorStyle: { backgroundColor: '#00B8EA' },
    tabBarLabelStyle: { fontWeight: 'bold'}
   }}>
    <MaterialTopTabs.Screen name="index" options={{ title: 'Global' }}/>
    <MaterialTopTabs.Screen name="following" options={{ title: 'Following' }}/>
  </MaterialTopTabs>
}

export default _layout