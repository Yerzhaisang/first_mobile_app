import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function GeneralInfo({route, navigation}) {
  const {name, familyName, dateOfBirth, nationality} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.nameText}>{name + ' ' + familyName}</Text>
      <Text style={styles.simpleText}>{dateOfBirth}</Text>
      <Text style={styles.simpleText}>{nationality}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold',
  },
  simpleText: {
    fontSize: 20,
  },
});

export default GeneralInfo;
