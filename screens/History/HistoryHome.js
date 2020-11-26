import React, { useState , useEffect} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HistoryCategories from './HistoryCategories';
import { Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeaderHistory from '../../components/HistoryHome/CustomHeaderHistory';



const HistoryHome = (props) => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState(false);
    const [url, setUrl] = useState('http://192.168.43.36:3000/quanlychitieu/history')

    useEffect( () => {
        const getApi = async () => {
            try {
                let respone = await fetch(url);
                let json = await respone.json();
                console.log(json);
                setData(json)
            } catch (error) {
                console.log(error);
            }
        };
        getApi();
    },[])
        return (
            <View>
                <CustomHeaderHistory />
                <SafeAreaView style={{marginBottom:150}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <HistoryCategories
                                data={item}
                            />
                        )}
                        keyExtractor={item => `${item.id_history}`}
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