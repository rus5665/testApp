import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'

export default class Headers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.burgerContainer}>
          <View style={styles.burgerItem} />
          <View style={styles.burgerItem} />
          <View style={styles.burgerItem} />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
        <Image
          style={styles.ring}
          source={require('../../assets/icons/notification.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: scale(20),
    backgroundColor: Colors.white,
  },
  menu: {

  },
  logo: {
    width: scale(126),
    height: scale(12)
  },
  ring: {
    width: scale(16),
    height: scale(16)
  },
  burgerContainer: {
    height: scale(16),
    justifyContent: 'space-between'
  },
  burgerItem: {
    height: scale(2.5),
    width: scale(18.5),
    borderRadius: scale(2),
    backgroundColor: Colors.black,
  },
})
