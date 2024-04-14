import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import style from '../style'

export default class Home extends React.Component {
    render () {
        const {message} = this.props
        return (
            <View>
                <Text style={style.title}>Home</Text>
                <Text>Lorem ipsum dolor sit amot</Text>
                <Text>{message}</Text>
            </View>
        )
    }
}