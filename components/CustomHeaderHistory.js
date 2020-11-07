import React, {Component}from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class CustomerDetailProduct extends Component{
    render(){
        return(
        <View style={styles.headerContainer}>
            <View style={{flex:5}}>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'600',marginLeft:15}}>Danh mục chi tiêu</Text>
            </View>
            <View style={{flexDirection:'row',marginHorizontal:10}}>
                <TouchableOpacity style={{marginRight:30}}>
                    <FontAwesome name="search" size={20} color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:30,marginTop:2}}>
                    <FontAwesome name="th-list" size={20} color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="calendar" size={20} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer : {
        flexDirection : 'row',
        backgroundColor : '#3284C1',
        paddingVertical : 15,
        marginBottom : 10,
        alignItems:'center'
    },
})