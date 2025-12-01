
// import { Tabs } from 'expo-router'
// import React from 'react'
// import { useColorScheme } from 'react-native'
// import { Colors } from '../../constants/Colors'
// import { Ionicons } from '@expo/vector-icons'

// const DashboardLayout = () => {
//     const colorScheme = useColorScheme()
//     const theme = Colors[colorScheme] ?? Colors.light
//   return (
//     <Tabs
//         screenOptions={{headerShown: false, tabBarStyle: { backgroundColor: theme.navBackground, paddingTop: 10, height: 90 }, tabBarActiveTintColor: theme.iconColorFocused, tabBarInactiveTintColor: theme.iconColor }}
//     >
//         <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => (
//             <Ionicons size={24} name='person' />
//         ) }} />
//         <Tabs.Screen name="books" options={{ title: 'Books' }} />
//         <Tabs.Screen name="create" options={{ title: 'Create' }} />
//     </Tabs>
//   )
// }

// export default DashboardLayout


import { Tabs } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <Tabs
            screenOptions={{headerShown: false, tabBarStyle: { backgroundColor: theme.navBackground, paddingTop: 10, height: 90 }, tabBarActiveTintColor: theme.iconColorFocused, tabBarInactiveTintColor: theme.iconColor }}
        >
            {/* 1. Profile Tab (Already Done) */}
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: 'Profile', 
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            size={24} 
                            name='person' 
                            color={color} 
                        />
                    ) 
                }} 
            />
            
            {/* 2. Books Tab (Icon Added) */}
            <Tabs.Screen 
                name="books" 
                options={{ 
                    title: 'Books',
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            size={24} 
                            name='book' // বই-এর আইকন
                            color={color} 
                        />
                    ) 
                }} 
            />
            
            {/* 3. Create Tab (Icon Added) */}
            <Tabs.Screen 
                name="create" 
                options={{ 
                    title: 'Create',
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            size={24} 
                            name='add-circle-outline' // নতুন কিছু তৈরি করার আইকন
                            color={color} 
                        />
                    ) 
                }} 
            />
        </Tabs>
    )
}

export default DashboardLayout