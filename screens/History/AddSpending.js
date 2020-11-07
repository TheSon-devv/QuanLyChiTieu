import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomAddSpending from '../../components/CustomAddSpending';


export default class AddSpending extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={style.container}>
                <CustomAddSpending navigation={navigation} />
                <View style={style.body}>
                    <View style={style.addPrice}>
                        <Text style={{fontSize:16}}>Số tiền</Text>
                        <TextInput 
                            placeholder="Nhập số tiền"
                            style={{marginLeft:20,fontSize:16}}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={style.danhMuc}>
                        <Text style={{fontSize:16}}>Số tiền</Text>
                        
                    </View>
                    <View style={style.addPrice}>
                        <Text style={{fontSize:16}}>Số tiền</Text>
                        <TextInput 
                            placeholder="Nhập số tiền"
                            style={{marginLeft:20,fontSize:16}}
                            keyboardType="numeric"
                        />
                    </View>

                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container : {
        backgroundColor:"#fff",
        flex:1
    },
    body : {
        alignItems:'center',
        justifyContent:'center'
    },
    addPrice: {
        borderRadius:10,
        width: '90%',
        flexDirection:'row',
        paddingHorizontal:10,
        backgroundColor : '#E8E8E8',
        alignItems:'center'
    },
    danhMuc : {
        borderRadius:10,
        width: '90%',
        flexDirection:'row',
        paddingHorizontal:10,
        backgroundColor : '#E8E8E8',
        alignItems:'center'
    }
})