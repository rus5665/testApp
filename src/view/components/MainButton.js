import React, { PureComponent } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'

export default class MainButton extends PureComponent {

  render() {
    const {
      title,
      onPress,
      width = scale(335),
    } = this.props

    return (
      <TouchableOpacity style={[styles.container, { width: width }]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blueDC,
    borderRadius: scale(8),
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: Colors.white
  }
})

