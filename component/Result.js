import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';
import style from '../style';

export default class Result extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.route.params.searchResults || null
        };
    }

    render() {
        if (!this.state.data) {
            return (
                <View>
                    <Text>Un peu de patience</Text>
                    <ActivityIndicator color={style.color} size='large' />
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={style.title}>Résultats</Text>
                    <FlatList
                        data={this.state.data.results}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{item.overview}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 150
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
