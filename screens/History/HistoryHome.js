import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HistoryCategories from './HistoryCategories';
import { Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeaderHistory from '../../components/CustomHeaderHistory';
import Canlendars from '../../components/Canlendars';

const initialState = [
    { id: 1, price: '200.000', danhMuc: 'Tiền phụ cấp', time: '13:00', namedanhMuc: 'facebook' },
    { id: 2, price: '100.000', danhMuc: 'Tiền ăn', time: '15:00', namedanhMuc: 'usd' },
    { id: 3, price: '300.000', danhMuc: 'Tiền xe', time: '14:00' },
    { id: 4, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
    { id: 5, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
    { id: 6, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
    { id: 7, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
    { id: 8, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
    { id: 9, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
    { id: 10, price: '250.000', danhMuc: 'Tiền phụ cấp', time: '13:00' },
];
const HistoryHome = (props) => {
    const [state, setstate] = useState(initialState);
    const [modalVisible, setModalVisible] = useState(false);
    const [active, setActive] = useState(false);
        return (
            <View>
                <CustomHeaderHistory />
                <SafeAreaView style={{marginBottom:150}}>
                    <FlatList
                        data={state}
                        renderItem={({ item }) => (
                            <HistoryCategories
                                data={item}
                            />
                        )}
                        keyExtractor={item => `${item.id}`}
                    />
                    <View style={{ flex: 1 }}>
                        <Fab
                            active={active}
                            direction="up"
                            containerStyle={{}}
                            style={{ backgroundColor: '#3284C1'}}
                            position="bottomRight"
                            onPress={() => props.navigation.navigate('AddSpending')}>
                            <FontAwesome name="plus" size={35} />
                        </Fab>
                    </View>
                </SafeAreaView>
                <View></View>
                
            </View>
        );
}
export default HistoryHome ;