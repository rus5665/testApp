import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'

export default class SearchBox extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/icons/search_active_icon.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={text => this.props.setSearchInputValue(text)}
          placeholderTextColor={Colors.grey8A}
          value={this.props.searchValue}
          placeholder={'Search...'}
        />
        <TouchableOpacity onPress={this.props.toggleSearch}>
          <Image
            source={require('../../assets/icons/close_icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    width: scale(335),
    height: scale(50),
    marginTop: scale(20),
    marginBottom: scale(7.5),
    marginHorizontal: scale(20),
    paddingHorizontal: scale(17),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: scale(8),
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 7.84,

    elevation: 1,
  },
  searchInput: {
    width: '90%',
    paddingHorizontal: scale(10),
    fontSize: scale(16)
  },
  icon: {
    width: scale(16),
    height: scale(16),
  },
})
