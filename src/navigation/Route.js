import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthSatck from './AuthSatck'

const Route = () => {
  return (
    <NavigationContainer>
        {<AuthSatck/>}
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})