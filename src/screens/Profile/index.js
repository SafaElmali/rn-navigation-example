import React from 'react';
import {View, Text} from 'react-native';

const Profile = props => {
  console.log(props);
  // const username = props.route.params.username;
  // const password = props.route.params.password;
  const {username, password} = props.route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
      <Text>username: {username}</Text>
      <Text>password: {password}</Text>
    </View>
  );
};

export default Profile;
