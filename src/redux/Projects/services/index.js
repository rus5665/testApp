import axios from 'axios'
import { Alert } from 'react-native'
import { URL } from '../../../utils/constants'

class Service {

  static async getProjectsData() {
    try {
      let response = await axios.get(`${URL}`)
      console.log('response', response)
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        Alert.alert(error.response.data.message)
      }
      return {}
    }
  }
}

export default Service