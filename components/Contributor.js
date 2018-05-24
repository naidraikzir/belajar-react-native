import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Contributor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarShadow}>
          <View style={styles.avatarRadius}>
            <Image source={{ uri: this.props.avatar }} style={styles.avatar}/>
          </View>
        </View>
        <Text style={styles.username}>{this.props.username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarShadow: {
    width: '65%',
    height: '65%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 25,
    borderRadius: 20,
  },
  avatarRadius: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    marginTop: '5%',
  },
});
