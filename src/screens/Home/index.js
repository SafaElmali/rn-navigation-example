import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = props => {
  const {navigation} = props;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', {
            username: 'Safa',
            password: '242141',
          })
        }
      />
    </View>
  );
};

export default Home;
