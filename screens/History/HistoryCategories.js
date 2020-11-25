import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HistoryCategories extends Component {
    render() {
        const { data } = this.props;
        return (
            <View style={style.container} key={data.id_history}>
                <View style={style.listItems} >
                    <View >
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>{data.title}</Text>
                        </View>
                        <Text style={style.textListItem}>{data.money} VND</Text>
                        <View style={style.bottomListItem}>
                            <Text> <Icon name="usd" size={20} color="#900" /> {data.name_danhmuc}</Text>
                            <Text> <Icon name="clock-o" size={20} color="#900" /> {data.time} </Text>
                        </View>
                    </View>

                </View>

            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItems: {
        borderWidth: 1,
        width: '95%',
        marginTop: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderColor: '#EAB6AA',
        borderRadius: 10,
        elevation : 3
    },
    bottomListItem: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
    },
    textListItem: {
        textAlign: 'center',
        fontSize: 25
    }
})