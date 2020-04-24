import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native'
import Service from '../../redux/Projects/services'
import { scale } from '../../utils/common'
import { Colors } from '../../utils/Colors'
import ProjectListItem from '../components/ProjectListItem'
import SearchAndFilter from '../components/SearchAndFilter'
import FilterModal from '../components/FilterModal'
import Headers from '../components/Headers'

export default class ProjectsList extends Component {

  state = {
    data: [],
    filterIsOpen: false,
    searchInput: '',
    dataSearch: [],
    filteredData: [],
    isFetching: false,
  }

  async componentDidMount() {
    let response = await Service.getProjectsData()
    let data = response.data
    console.log('data', data)
    this.setState({
      data: data,
      dataSearch: data,
      filteredData: data
    })
  }

  getApiData = async () => {
    try {
      let response = await Service.getProjectsData()
      let data = response.data
      return data
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        Alert.alert(error.response.data.message)
      }
      return {}
    }

  }

  openFilterModal = () => {
    this.setState({
      filterIsOpen: true
    })
  }

  closeFilterModal = () => {
    this.setState({
      filterIsOpen: false
    })
  }

  filterModal = () => {
    return <FilterModal
      closeFilterModal={this.closeFilterModal}
      applyFilter={this.applyFilter}
      data={this.state.data}
    />
  }

  searchFilterComponent = () => {
    return (
      <SearchAndFilter
        openFilterModal={this.openFilterModal}
        searchValue={this.state.searchInput}
        setSearchInputValue={this.setSearchInputValue}
      />
    )
  }

  setSearchInputValue = (text) => {
    this.setState({
      searchInput: text,
      dataSearch: this.state.data.filter(item => new RegExp(text, "i").test(item.title)),
      filteredData: this.state.data.filter(item => new RegExp(text, "i").test(item.title))
    })
  }

  dataRenderItem = (item) => {
    return (
      <ProjectListItem item={item} />
    )
  }

  applyFilter = (filterButtons) => {
    const dataSearch = this.state.dataSearch
    let defaultData = this.state.dataSearch
    let active = []
    let onHold = []
    let finished = []

    if (filterButtons.activeButton) {
      defaultData = []
      active = dataSearch.filter(item => item.status.includes('Active'))
    }
    if (filterButtons.onHoldButton) {
      defaultData = []
      onHold = dataSearch.filter(item => item.status.includes('On hold'))
    }
    if (filterButtons.finishedButton) {
      defaultData = []
      finished = dataSearch.filter(item => item.status.includes('Finished'))
    }
    if (filterButtons.allButton) {
      this.setState({
        filteredData: this.state.data,
        dataSearch: this.state.data
      })
    }

    const filteredData = [...defaultData, ...active, ...onHold, ...finished]

    if (filterButtons.aToZButton) {
      filteredData.sort(function (a, b) {
        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()
        if (titleA < titleB)
          return -1
        if (titleA > titleB)
          return 1
        return 0
      })
    }
    if (filterButtons.zToAButton) {
      filteredData.sort(function (a, b) {
        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()
        if (titleA > titleB)
          return -1
        if (titleA < titleB)
          return 1
        return 0
      })
    }
    if (filterButtons.zToAButton) {
      filteredData.sort(function (a, b) {
        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()
        if (titleA > titleB)
          return -1
        if (titleA < titleB)
          return 1
        return 0
      })
    }
    if (filterButtons.deadlineDESC) {
      console.log('filteredData', filteredData)

      filteredData.sort(function (a, b) {
        return a.deadline - b.deadline
      })
    }
    if (filterButtons.deadlineASC) {
      console.log('filteredData', filteredData)

      filteredData.sort(function (a, b) {
        return b.deadline - a.deadline
      })
    }

    this.setState({
      filteredData: filteredData,
      dataSearch: dataSearch,

    })
    this.closeFilterModal()
  }

  async onRefresh() {
    await this.setState({ isFetching: true })
    let response = await this.getApiData()
    console.log('response', response)
    this.setState({ filteredData: response })
    this.setState({ isFetching: false })
  }

  render() {
    let { filterIsOpen, filteredData } = this.state
    console.log('this.state', this.state)
    return (
      <View style={styles.container} >
        <Headers />
        <FlatList
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          ListHeaderComponent={this.searchFilterComponent}
          data={filteredData}
          renderItem={item => this.dataRenderItem(item)}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        {
          filterIsOpen
            ? this.filterModal()
            : null
        }
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.greyF8,
  },
})
