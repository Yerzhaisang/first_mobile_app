import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

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

const src = 'https://ergast.com/api/f1/drivers.json?limit=500';

const Listing = () => {
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
          <Text style={styles.item}>
            {item.givenName + ' ' + item.familyName}
          </Text>
        )}
      />
    </View>
  );
};

export default Listing;
