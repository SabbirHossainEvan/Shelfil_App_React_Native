import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <>
        <StatusBar style="auto" />
        <Stack
            screenOptions={{
                animation: "none"
            }}
         />
    </>
  )
}

