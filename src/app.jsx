import React, { useEffect, useState } from 'react'
import { Ledger } from 'accounting/components'

import { useApi } from 'accounting/hooks'

const App = () => {
  const api = useApi()

  const [operations, setOperations] = useState([])
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const fetch = async () => {
      const balance = await api.balance()
      setBalance(balance)
      const operations = await api.operations()
      setOperations(operations)
    }
    fetch()
  }, [])

  return <Ledger balance={ balance } operations={ operations }/>
}

export default App
