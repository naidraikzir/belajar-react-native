import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Contributor from './components/Contributor';
import github from './services/github';

const width = Dimensions.get('window').width;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: [],
    };
  }

  async componentDidMount() {
    const res = await github.contributors();
    const contributors = await res.json();
    this.setState({
      contributors,
    });
  }

  _keyExtractor = (item, index) => index;

  _renderItem({ item }) {
    return <Contributor avatar={item.avatar_url} username={item.login} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vue.js Contributors</Text>

        <FlatList
          data={this.state.contributors}
          renderItem={this._renderItem}
          numColumns={2}
          style={styles.list}
          columnWrapperStyle={styles.listColumn}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#113',
    color: '#fff',
    fontSize: 24,
    paddingBottom: 20,
    paddingTop: 40,
    textAlign: 'center',
    width: '100%',
  },
  listColumn: {
    justifyContent: 'space-around',
    width,
    height: width / 2,
    marginTop: 25,
    marginBottom: 15,
  },
});
