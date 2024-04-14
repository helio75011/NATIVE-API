import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import style from '../style'

export default class Result extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            r : this.props.route.params.research,
            data : null
        }

        setTimeout(() => {
            this.setState({data : 'quelque chose'})
        }, 1000)
    }

    render () {

        this.props.navigation.setOptions({
            title: 'Recherhe : ' + this.state.r
        })

        if(this.state.data === null){
            return (
                <View>
                    <Text>Un peu de patience</Text>
                    <ActivityIndicator color={style.color} size='large' />
                </View>
            ) 
        } else {
            return (
                <View>
                    <Text style={style.title}>Resultats</Text>
                    <Text>{this.state.r}</Text>
                </View>
            )
        }
    }
}