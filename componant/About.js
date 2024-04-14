import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import style from '../style'

export default class About extends React.Component {
    render () {
        return (
            <View>
                <Text style={style.title}>About</Text>
                <Text>Lorem ipsum dolor sit amot</Text>
            </View>
        )
    }
}