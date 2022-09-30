import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GeneralInfo from '../screens/GeneralInfo';
import WikiInfo from '../screens/WikiInfo';

const Tab = createBottomTabNavigator();

function TabNavigators({route, navigation}) {
  const {name, familyName, dateOfBirth, nationality, url} = route.params;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="General"
        options={{headerShown: false}}
        component={GeneralInfo}
        initialParams={{
          name: name,
          familyName: familyName,
          dateOfBirth: dateOfBirth,
          nationality: nationality,
        }}
      />
      <Tab.Screen
        name="Wiki"
        options={{headerShown: false}}
        component={WikiInfo}
        initialParams={{
          url,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigators;
