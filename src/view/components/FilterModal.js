import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View
} from 'react-native'
import { scale, windowWidth } from '../../utils/common'
import { Colors } from '../../utils/Colors'
import MainButton from './MainButton'
import FilterSelectButton from './FilterSelectButton'
import { FilterIcon } from './IconsSet'
import { Statuses } from '../../utils/Statuses'

export default class FilterModal extends PureComponent {

  state = {
    allButton: true,
    activeButton: false,
    finishedButton: false,
    onHoldButton: false,
    aToZButton: false,
    zToAButton: false,
    deadlineDESC: false,
    deadlineASC: false,
    activeCount: 0,
    onHoldCount: 0,
    finishedCount: 0,
  }

  componentDidMount() {
    const data = this.props.data
    this.setState({
      activeCount: data.filter(item => item.status.includes(Statuses.active)),
      onHoldCount: data.filter(item => item.status.includes(Statuses.onHold)),
      finishedCount: data.filter(item => item.status.includes(Statuses.finished))
    })
  }

  setAZSort = () => {
    this.setState({ aToZButton: !this.state.aToZButton })
    if (!this.state.aToZButton) {
      this.setState({ zToAButton: false })
    }
  }

  setZASort = () => {
    this.setState({ zToAButton: !this.state.zToAButton })
    if (!this.state.zToAButton) {
      this.setState({ aToZButton: false })
    }
  }

  setDeadLineDESCSort = () => {
    this.setState({
      deadlineDESC: !this.state.deadlineDESC,
    })
    if (!this.state.deadlineDESC) {
      this.setState({
        deadlineASC: false,
      })
    }
  }

  setDeadLineASCSort = () => {
    this.setState({ deadlineASC: !this.state.deadlineASC })
    if (!this.state.deadlineASC) {
      this.setState({ deadlineDESC: false })
    }
  }

  setAllSort = () => {
    this.setState({ allButton: !this.state.allButton })
    if (!this.state.allButton) {
      this.setState({
        activeButton: false,
        finishedButton: false,
        onHoldButton: false,
      })
    }
  }

  setOnHoldSort = () => {
    this.setState({ onHoldButton: !this.state.onHoldButton })
    if (!this.state.onHoldButton) {
      this.setState({ allButton: false })
    }
  }

  setActiveSort = () => {
    this.setState({ activeButton: !this.state.activeButton })
    if (!this.state.activeButton) {
      this.setState({ allButton: false })
    }
  }

  setFineshedSort = () => {
    this.setState({ finishedButton: !this.state.finishedButton })
    if (!this.state.finishedButton) {
      this.setState({ allButton: false })
    }
  }

  render() {
    const {
      allButton,
      activeButton,
      finishedButton,
      onHoldButton,
      aToZButton,
      zToAButton,
      deadlineDESC,
      deadlineASC,
      activeCount,
      onHoldCount,
      finishedCount,
    } = this.state

    const {
      closeFilterModal,
      data,
      applyFilter
    } = this.props

    const filterButtons = {
      allButton,
      activeButton,
      finishedButton,
      onHoldButton,
      aToZButton,
      zToAButton,
      deadlineDESC,
      deadlineASC,
    }

    return (
      <View style={styles.filterModalContainer}>
        <View style={styles.buttonCloseFilterContainer}>
          <TouchableOpacity style={styles.button} onPress={closeFilterModal}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Filters</Text>
          <View style={styles.semanticBlock}>
            <Text style={styles.subTitle}>Status</Text>
            <View style={styles.buttonsContainer}>
              <FilterSelectButton title={`All (${data.length})`} onPress={this.setAllSort} active={allButton} />
              <FilterSelectButton title={`Active (${activeCount.length})`} onPress={this.setActiveSort} active={activeButton} />
              <FilterSelectButton title={`Finished (${finishedCount.length})`} onPress={this.setFineshedSort} active={finishedButton} />
              <FilterSelectButton title={`On Hold (${onHoldCount.length})`} onPress={this.setOnHoldSort} active={onHoldButton} />
            </View>
          </View>
          <View style={styles.semanticBlock}>
            <Text style={styles.subTitle}>Sort by</Text>
            <View style={styles.buttonsContainer}>
              <FilterSelectButton title={'Project Name A-Z'} onPress={this.setAZSort} active={aToZButton} />
              <FilterSelectButton title={'Project Name Z-A'} onPress={this.setZASort} active={zToAButton} />
              <FilterSelectButton title={'Deadline DESC'} onPress={this.setDeadLineDESCSort} active={deadlineDESC} />
              <FilterSelectButton title={'Deadline ASC'} onPress={this.setDeadLineASCSort} active={deadlineASC} />
            </View>
          </View>
          <MainButton title={'Apply Filters'} onPress={() => { applyFilter(filterButtons) }} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filterModalContainer: {
    justifyContent: 'space-between',
    top: scale(54),
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  mainContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: scale(30),
    paddingTop: scale(25),
    bottom: 0,
    width: windowWidth,
    backgroundColor: Colors.white,
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
  },
  buttonCloseFilterContainer: {
    width: windowWidth,
    alignItems: 'flex-end',
    marginTop: scale(20),
    paddingRight: scale(65),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(36),
    height: scale(36),
    borderRadius: scale(8),
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: Colors.black,
    paddingBottom: scale(30),
  },
  semanticBlock: {
    paddingBottom: scale(22.5),
  },
  subTitle: {
    fontSize: scale(12),
    color: Colors.greyD4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: scale(12.5),
  },
})
