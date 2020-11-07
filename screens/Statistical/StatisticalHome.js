import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Fab,Button} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class StatisticalHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataHistory: [
                { id: 1, price: '200.000', danhMuc: 'Tiền phụ cấp', time: '13:00', namedanhMuc: 'facebook' },
                { id: 2, price: '100.000', danhMuc: 'Tiền ăn', time: '15:00', namedanhMuc: 'usd' },
                { id: 3, price: '300.000', danhMuc: 'Tiền xe', time: '14:00' },
                { id: 4, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
                { id: 5, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
                { id: 6, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
                { id: 7, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
                { id: 8, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
                { id: 9, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
            ],
            active: false
        }
    }

    render() {
        const { dataHistory } = this.state;
        return (
            <View></View>
        );
    }
}