import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View
} from 'react-native'
import moment from 'moment'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'

export default class StatusLine extends Component {


  getDate = (date) => {
    date = new Date(date * 1000)
    date = moment(date).format("DD/MM/YY")
    return date
  }

  getLeftTime = () => {
    let leftTimeText = ''
    let { dateFrom, dateTo } = this.props

    let timeNow = Date.now() / 1000
    let delta = Math.abs(dateTo - timeNow)
    let years = Math.floor(delta / 32140800)
    let months = Math.floor(delta / 2678400)
    let days = Math.floor(delta / 86400)

    if (years > 0) {
      return leftTimeText = `${years} ${this.getPlural(years, 'year')} left`
    } else if (months > 0) {
      return leftTimeText = `${months} ${this.getPlural(months, 'month')} left`
    } else if (days > 0) {
      return leftTimeText = `${days} ${this.getPlural(days, 'day')} left`
    }
  }

  getHoldTime = () => {
    let holdTimeText = ''
    const { onHoldDate } = this.props

    let timeNow = Date.now() / 1000
    let delta = Math.abs(timeNow - onHoldDate)
    let years = Math.floor(delta / 32140800)
    let months = Math.floor(delta / 2678400)
    let days = Math.floor(delta / 86400)

    if (years > 0) {
      return holdTimeText = `${years} ${this.getPlural(years, 'year')} on hold`
    } else if (months > 0) {
      return holdTimeText = `${months} ${this.getPlural(months, 'month')} on hold`
    } else if (days > 0) {
      return holdTimeText = `${days} ${this.getPlural(days, 'day')} on hold`
    }
  }

  getFinishedTime = () => {
    const { finished } = this.props
    let finishedTimeText = `finished on ${this.getDate(finished)}`
    return finishedTimeText
  }

  getStatusTime = (status) => {
    if (status === 'Active') {
      let text = this.getLeftTime()
      return text
    }
    if (status === 'On hold') {
      let text = this.getHoldTime()
      return text
    }
    if (status === 'Finished') {
      let text = this.getFinishedTime()
      return text
    }
  }

  getPlural = (number, name) => {
    if (number > 1) {
      return name + 's'
    } else { return name }
  }

  render() {
    let {
      status,
      tasks,
      tasksNumber,
      dateFrom,
      dateTo,
      width = scale(295)
    } = this.props

    const statusWidth = tasks / tasksNumber * width
    const percent = Math.round(tasks / tasksNumber * 100)

    function statusColor() {
      return (
        status === 'Active' || status === 'Finished'
          ? Colors.blueDC
          : Colors.orange42
      )
    }

    function deadlineStyle() {
      return (
        status === 'Active' || status === 'Finished'
          ? styles.date
          : styles.deadlineOnHold
      )
    }

    this.getLeftTime()
    return (
      <View>
        <View style={styles.topInfo}>
          <Text style={styles.date}>{this.getDate(dateFrom)}</Text>
          <View style={styles.taskContainer}>
            <Text style={styles.tasksText}>Tasks </Text>
            <Text style={[styles.tasksActiveText, { color: statusColor() }]}>{tasks}</Text>
            <Text style={styles.tasksSlash}> / </Text>
            <Text style={styles.tasksNumberText}>{tasksNumber}</Text>
          </View>
          <Text style={styles.date}>{this.getDate(dateTo)}</Text>
        </View>
        <View style={styles.statusLineContainer}>
          <View style={styles.statusLineBg} />
          <View style={[styles.statusLineActive, { backgroundColor: statusColor(), width: statusWidth }]} />
        </View>
        <View style={styles.bottomInfo}>
          <Text style={[styles.tasksActiveText, { color: statusColor() }]}>{percent}%</Text>
          <Text style={deadlineStyle()}>{this.getStatusTime(status)}</Text>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    color: Colors.greyD4,
    fontSize: scale(12),
  },
  deadlineOnHold: {
    color: Colors.orange42,
    fontSize: scale(12),
    paddingRight: scale(20),
  },
  taskContainer: {
    flexDirection: 'row'
  },
  tasksText: {
    color: Colors.greyD4,
    fontSize: scale(12),
  },
  tasksActiveText: {
    color: Colors.blueDC,
    fontSize: scale(12),
    fontWeight: '700'
  },
  tasksNumberText: {
    color: Colors.black,
    fontSize: scale(12),
    fontWeight: '700'
  },
  tasksSlash: {
    color: Colors.black,
    fontSize: scale(12),
  },
  statusLineContainer: {
    marginVertical: scale(5),
  },
  statusLineBg: {
    width: '100%',
    height: scale(3),
    borderRadius: scale(1.5),
    backgroundColor: Colors.greyCE,
  },
  statusLineActive: {
    position: 'absolute',
    width: '70%',
    height: scale(3),
    borderRadius: scale(1.5),
    backgroundColor: Colors.blueDC,
  },
  bottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

