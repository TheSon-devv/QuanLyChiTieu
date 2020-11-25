import React, {Component}from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const CustomAddSpending = ({navigation}) => {
        return(
        <View style={styles.headerContainer}>
            <View style={{flex:1,marginLeft:10}}>
                <TouchableOpacity onPress={ () => navigation.goBack()}>
                    <FontAwesome name="angle-left" size={30} color="#fff"/>
                </TouchableOpacity>
            </View>
            <View style={{flex:5}}>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'600'}}>Thêm chi tiêu</Text>
            </View>
        </View>
        )
}
const styles = StyleSheet.create({
    headerContainer : {
        flexDirection : 'row',
        backgroundColor : '#3284C1',
        paddingVertical : 15,
        marginBottom : 10
    },
})
export default CustomAddSpending;