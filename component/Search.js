import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import axios from 'axios';
import style from '../style';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { r: '' };
    }

    handleTextChange = (text) => {
        this.setState({ r: text });
    }

    submit = () => {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ec0f0883f1a23d5918a53751e8995e80&query=${this.state.r}`);
            this.props.navigation.navigate('Result', { searchResults: response.data });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View>
                <Text style={style.title}>Recherche</Text>
                <TextInput style={style.input} onChangeText={this.handleTextChange} />
                <Button title="Rechercher" onPress={this.submit} />
            </View>
        );
    }
}
