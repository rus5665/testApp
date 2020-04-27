import React from "react"
import { StyleSheet } from 'react-native'
import FastImage from "react-native-fast-image"
import { scale } from "../../utils/common"

export const SearchActiveIcon = () => {
  let source = require('../../assets/icons/search_active_icon.png')
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={source} style={styles.searchIcon} />
  )
}

export const SearchIcon = () => {
  let source = require('../../assets/icons/search_icon.png')
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={source} style={styles.searchIcon} />
  )
}

export const CloseSearchIcon = () => {
  let source = require('../../assets/icons/close_icon.png')
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={source} style={styles.searchIcon} />
  )
}

export const FilterIcon = () => {
  let source = require('../../assets/icons/filter_icon.png')
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={source} style={styles.searchIcon} />
  )
}

export const NotificationIcon = () => {
  let source = require('../../assets/icons/notification.png')
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={source} style={styles.searchIcon} />
  )
}

export const AddressIcon = () => {
  let source = require('../../assets/icons/location.png')
  return (
    <FastImage resizeMode={FastImage.resizeMode.contain} source={source} style={styles.addressIcon} />
  )
}

styles = StyleSheet.create({
  searchIcon: {
    width: scale(16),
    height: scale(16),
  },
  addressIcon: {
    width: scale(11),
    height: scale(13),
    marginRight: scale(7),
  }
})