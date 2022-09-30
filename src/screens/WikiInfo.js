import React from 'react';
import {View, Text} from 'react-native';

function WikiInfo({route, navigation}) {
  const {url} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{url}</Text>
    </View>
  );
}

export default WikiInfo;
