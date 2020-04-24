/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import ProjectsList from './view/screens/ProjectsList'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ProjectsList />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})

export default App;
