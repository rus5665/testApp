import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import FastImage from "react-native-fast-image"
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'
import { NotificationIcon } from './IconsSet'

export default class Headers extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.burgerContainer}>
          <View style={styles.burgerItem} />
          <View style={styles.burgerItem} />
          <View style={styles.burgerItem} />
        </TouchableOpacity>
        <FastImage
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
        <NotificationIcon />
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
