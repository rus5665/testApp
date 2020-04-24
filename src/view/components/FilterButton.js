import React, { PureComponent } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'

export default class FilterButton extends PureComponent {


  setActive = () => {
    this.setState({
      isActive: !this.props.active
    })
  }

  setBgColor() {
    return (
      this.props.active
        ? Colors.greyD4
        : Colors.white
    )
  }

  setTitleColor() {
    return (
      this.props.active
        ? Colors.white
        : Colors.black35s
    )
  }

  render() {
    const { active, title, onPress = this.setActive } = this.props
    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: this.setBgColor() }]}
        onPress={onPress}>
        <Text style={[styles.title, { color: this.setTitleColor() }]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(12),
    paddingHorizontal: scale(24),
    marginRight: scale(15),
    marginVertical: scale(7.5),
    borderRadius: scale(8),
    borderColor: Colors.greyD4,
    borderWidth: scale(1),
  },
  title: {
    color: Colors.black35,
    fontSize: scale(12),
  }
})
