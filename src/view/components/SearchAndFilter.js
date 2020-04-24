import React, { Component } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'
import SearchBox from './SearchBox'

export default class SearchAndFilter extends Component {

  state = {
    search: false
  }

  defaultTop = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Projects</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={this.props.openFilterModal}>
            <Image
              source={require('../../assets/icons/filter_icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.toggleSearch}>
            <Image
              source={require('../../assets/icons/search_icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  searchBox = () => {
    return (
      <SearchBox
        searchValue={this.props.searchValue}
        setSearchInputValue={this.props.setSearchInputValue}
        toggleSearch={this.toggleSearch}
      />
      // <View style={styles.searchContainer}>
      //   <Image
      //     source={require('../../assets/icons/search_active_icon.png')}
      //     style={styles.icon}
      //   />
      //   <TextInput
      //     style={styles.searchInput}
      //     onChangeText={text => this.props.setSearchInputValue(text)}
      //     placeholderTextColor={Colors.grey8A}
      //     value={this.props.searchValue}
      //     placeholder={'Search...'}
      //   />
      //   <TouchableOpacity onPress={this.toggleSearch}>
      //     <Image
      //       source={require('../../assets/icons/close_icon.png')}
      //       style={styles.icon}
      //     />
      //   </TouchableOpacity>
      // </View>
    )
  }

  toggleSearch = () => {
    this.setState({
      search: !this.state.search
    })
  }

  render() {
    return (
      <View>
        {
          this.state.search
            ? this.searchBox()
            : this.defaultTop()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: scale(335),
    //paddingTop: scale(20),
    marginTop: scale(20),
    marginBottom: scale(15),
    marginHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: scale(15),
    fontWeight: '900'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(36),
    height: scale(36),
    borderRadius: scale(8),
    backgroundColor: Colors.white,
    marginLeft: scale(9),
  },
  icon: {
    width: scale(16),
    height: scale(16),
  },
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

    elevation: 5,
  },
  searchInput: {
    width: '90%',
    paddingHorizontal: scale(10),
    fontSize: scale(16)
  },
})
