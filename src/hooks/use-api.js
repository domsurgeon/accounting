import axios from 'axios'

import manifest from 'accounting/manifest'

const useApi = () => {
  const api = {
    balance: async () => {
      let balance = 0
      try {
        const response = await axios.get(`${manifest.api}/balance`)
        balance = (response.status === 200 && response.data) || balance
      } catch (error) {
        console.error(error.toString())
      }
      return balance
    },
    operations: async () => {
      let operations = []
      try {
        const response = await axios.get(`${manifest.api}/operations`)
        operations = (response.status === 200 && response.data) || operations
      } catch (error) {
        console.error(error.toString())
      }
      return operations
    }
  }

  return api
}

export default useApi
