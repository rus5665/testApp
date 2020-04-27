import React, { PureComponent } from 'react'
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'
import { FilterIcon, SearchIcon } from './IconsSet'
import SearchBox from './SearchBox'

export default class SearchAndFilter extends PureComponent {

  state = {
    search: false
  }

  defaultTop = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Projects</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={this.props.openFilterModal}>
            <FilterIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.toggleSearch}>
            <SearchIcon />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  searchBox = () => {
    const { searchValue, setSearchInputValue } = this.props
    return (
      <SearchBox
        searchValue={searchValue}
        setSearchInputValue={setSearchInputValue}
        toggleSearch={this.toggleSearch}
      />
    )
  }

  toggleSearch = () => this.setState({ search: !this.state.search })

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
})
