import React, { PureComponent } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'
import { AddressIcon } from './IconsSet'
import StatusLine from '../components/StatusLine'
import StatusBox from '../components/StatusBox'

export default class ProjectListItem extends PureComponent {

  render() {
    const {
      id,
      title,
      img,
      imgNumber,
      address,
      name,
      employees,
      status,
      onHoldDate,
      finished,
      startDate,
      deadline,
      tasks,
      numberOfTasks,
    } = this.props.item.item

    return (
      <View style={styles.container}>
        <View style={styles.titleImgDotsContainer}>
          <View style={styles.titleImgContainer}>
            <View style={styles.imgContainer}>
              <View style={styles.imgNumber}>
                <Text style={styles.imgNumberText}>{imgNumber}</Text>
              </View>
              <Image
                source={{ uri: img }}
                style={styles.mainImage}
              />
            </View>
            <TouchableOpacity style={styles.titleContainer}>
              <Text style={styles.titleText}>{title}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.dotsMenuContainer}>
            <View style={styles.dotMenu} />
            <View style={styles.dotMenu} />
            <View style={styles.dotMenu} />
          </TouchableOpacity>
        </View>
        <View style={styles.addressContainer}>
          <AddressIcon />
          <Text style={styles.addressText}>{address}</Text>
        </View>
        <View style={styles.nameEmplStatusContainer}>
          <View style={styles.nameEmplContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.employeesContainer}>
              <Text style={styles.employeesNumber}>{employees}</Text>
              <Text style={styles.employeesText}> Employees</Text>
            </View>
          </View>
          <StatusBox status={status} />
        </View>
        <StatusLine
          status={status}
          tasks={tasks}
          tasksNumber={numberOfTasks}
          dateFrom={startDate}
          dateTo={deadline}
          onHoldDate={onHoldDate}
          finished={finished}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: scale(335),
    marginTop: scale(5),
    marginBottom: scale(15),
    paddingTop: scale(20),
    marginHorizontal: scale(20),
    paddingHorizontal: scale(20),
    paddingBottom: scale(14),
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
  titleImgDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleImgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    width: '68%',
    paddingHorizontal: scale(18),
  },
  titleText: {
    color: Colors.black,
    fontSize: scale(15),
    fontWeight: 'bold'
  },
  imgContainer: {
    width: scale(90),
    height: scale(63),
    borderRadius: scale(8),
    overflow: 'hidden',
    backgroundColor: Colors.blueF5,
  },
  mainImage: {
    width: scale(90),
    height: scale(63),
  },
  imgNumber: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(42),
    height: scale(24),
    borderBottomRightRadius: scale(8),
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 3,
  },
  imgNumberText: {
    fontSize: scale(12),
    fontWeight: '900',
    color: Colors.greyD4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(15),
  },
  addressText: {
    color: Colors.greyD4,
    fontSize: scale(12),
  },
  nameEmplStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(7),
    paddingBottom: scale(21)
  },
  nameText: {
    color: Colors.black35,
    fontSize: scale(14),
    fontWeight: 'bold',
    lineHeight: scale(18)
  },
  employeesContainer: {
    flexDirection: 'row',
  },
  employeesText: {
    color: Colors.greyD4,
    fontSize: scale(12),
  },
  employeesNumber: {
    color: Colors.greyD4,
    fontSize: scale(12),
    fontWeight: 'bold',
  },
  dotsMenuContainer: {
    height: scale(21),
    justifyContent: 'space-between',
  },
  dotMenu: {
    width: scale(4),
    height: scale(4),
    borderRadius: scale(4),
    backgroundColor: Colors.greyCE
  },
})
