import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  //   const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="list screen" onPress={() => navigation.navigate('List')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
