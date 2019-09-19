import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Image } from 'react-native'

import Feed from './pages/Feed'
import New from './pages/New'

import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />
        }, mode: 'modal'
    })
)