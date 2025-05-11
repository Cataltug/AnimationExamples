
import React from 'react'
import RootNavigator from './src/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator/>
    </SafeAreaProvider>
  )
}

export default App