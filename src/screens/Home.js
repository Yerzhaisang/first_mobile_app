import * as React from 'react';
import {Text, SafeAreaView, StyleSheet, Pressable, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.titleText}>Hi, it's my first app;)</Text>
      <Text style={styles.simpleText}>
        Here you can find list of F1 drivers
      </Text>
      <Button
        style={styles.button}
        title="Press me!"
        onPress={() => navigation.navigate('List')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'red',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green',
  },
  titleText: {
    fontSize: 35,
    lineHeight: 35,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    color: 'black',
  },
  simpleText: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    color: 'black',
  },
});

export default HomeScreen;
