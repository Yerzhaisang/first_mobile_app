import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Button} from 'react-native';
import axios from 'axios';

const src = 'https://ergast.com/api/f1/drivers.json?limit=500';

const Listing = ({navigation}) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get(src).then(data => {
      setDrivers(data.data.MRData.DriverTable.Drivers);
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={drivers}
        renderItem={({item}) => (
          <Button
            style={styles.button}
            title={item.givenName + ' ' + item.familyName}
            onPress={() =>
              navigation.navigate('Profile', {
                name: item.givenName,
                familyName: item.familyName,
                dateOfBirth: item.dateOfBirth,
                nationality: item.nationality,
                url: item.url,
              })
            }
          />
          // <Text style={styles.item}>
          //   {item.givenName + ' ' + item.familyName}
          // </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
});

export default Listing;
