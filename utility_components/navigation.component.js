import React from 'react'; 
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/Main';
import OptionsScreen from '../screens/Options';
import CategoriesScreen from '../screens/Categories';
import RollResultScreen from '../screens/Roll';
import AddCategoryScreen from '../screens/AddCategory';
import ImportExportScreen from '../screens/ImportExport';
import CommunityCategories from '../screens/CommunityCategories';
import AdvancedSettings from '../screens/AdvSettings';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    headerMode="none"
    detachInactiveScreens={false}
    screenOptions={{animationEnabled: false}}>
    <Screen name="Main" component={MainScreen} />
    <Screen name="Options" component={OptionsScreen} />
    <Screen name="Categories" component={CategoriesScreen} />
    <Screen name="AddCategory" component={AddCategoryScreen} />
    <Screen name="Roll" component={RollResultScreen} />
    <Screen name="ImportExport" component={ImportExportScreen} />
    <Screen name="CommunityCategories" component={CommunityCategories} />
    <Screen name="AdvSettings" component={AdvancedSettings} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
