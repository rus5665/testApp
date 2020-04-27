import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Colors } from '../../utils/Colors'
import { scale } from '../../utils/common'
import { Statuses } from '../../utils/Statuses'

export default class StatusBox extends PureComponent {

  getStatusBgColor() {
    const status = this.props.status
    return (
      status === Statuses.active
        ? Colors.blueStatusOpacity
        : status === Statuses.onHold
          ? Colors.orangeStatusOpacity
          : status === Statuses.finished
            ? Colors.greenStatusOpacity
            : Colors.greyD4
    )
  }

  getStatusTextColor() {
    const status = this.props.status
    return (
      status === Statuses.active
        ? Colors.blueB5
        : status === Statuses.onHold
          ? Colors.orange42
          : status === Statuses.finished
            ? Colors.green3C
            : Colors.greyD4
    )
  }

  render() {
    return (
      <View style={[styles.statusContainer, { backgroundColor: this.getStatusBgColor() }]}>
        <Text style={[styles.statusText, { color: this.getStatusTextColor() }]}>{this.props.status}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusContainer: {
    backgroundColor: Colors.blueF5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    paddingVertical: scale(8),
    paddingHorizontal: scale(19),
  },
  statusText: {
    color: Colors.blueB5,
    fontSize: scale(12),
  },
})
