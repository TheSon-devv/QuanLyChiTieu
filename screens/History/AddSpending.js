import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Alert, TouchableHighlight, Picker } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomAddSpending from '../../components/AddSpending/CustomAddSpending';


const AddSpending = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [selectedValueLCT, setSelectedValueLCT] = useState('Thu');
    const [selectedValueDM, setSelectedValueDM] = useState("muckhac");
    console.log(selectedValueDM);
    const [active, setActive] = useState(false);
    const [url, setUrl] = useState('http://192.168.0.117:3000/quanlychitieu/danhmuc')
    const [modalVisible, setModalVisible] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
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
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                <CustomAddSpending navigation={navigation} />
                <TouchableWithoutFeedback>
                    <View style={styles.body}>
                        <View style={styles.addPrice}>
                            <Text style={{ fontSize: 16 }}>Số tiền</Text>
                            <TextInput
                                placeholder="Nhập số tiền"
                                style={{ marginLeft: 20, fontSize: 16, width: 270 }}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.danhMuc}>
                            <Text style={{ fontSize: 16 }}>Danh mục</Text>
                            <Picker
                                selectedValue={selectedValueDM}
                                style={{ height: 50, width: 165, color: "green" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueDM(itemValue)}
                            >

                                <Picker.Item label="Mục khác" value="muckhac" />
                                <Picker.Item label="Mua sắm" value="Mua sắm" />
                                <Picker.Item label="Ăn uống" value="Ăn uống" />
                                <Picker.Item label="Đổ xăng" value="xang" />
                                <Picker.Item label="Tiền nhà" value="Tiền nhà" />
                                <Picker.Item label="Tiền điện" value="Tiền điện" />
                                <Picker.Item label="Tiền nước" value="Tiền nước" />
                                <Picker.Item label="Tiền học" value="Tiền học" />
                                <Picker.Item label="Tiền Internet" value="Tiền Internet" />
                                <Picker.Item label="Đám cưới" value="Đám cưới" />
                                <Picker.Item label="Xe cộ" value="Xe cộ" />
                                <Picker.Item label="Tiền lương" value="Tiền lương" />
                                <Picker.Item label="Tiền tiết kiệm" value="Tiền tiết kiệm" />
                                <Picker.Item label="Đi chơi" value="Đi chơi" />
                            </Picker>
                        </View>
                        <View style={styles.chiTieu}>
                            <Text style={{ fontSize: 16 }}>Loại chi tiêu</Text>
                            <Picker
                                selectedValue={selectedValueLCT}
                                style={{ height: 50, width: 150, color: "green" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueLCT(itemValue)}
                            >
                                <Picker.Item label="Thu" value="Thu" />
                                <Picker.Item label="Chi" value="Chi" />
                                <Picker.Item label="Vay" value="Vay" />
                                <Picker.Item label="Cho Mượn" value="Cho Mượn" />
                            </Picker>
                        </View>

                        <View style={styles.ghiChu}>
                            <Text style={{ fontSize: 16 }}>Ghi chú</Text>
                            <TextInput
                                placeholder="Nhập ghi chú"
                                style={{ marginLeft: 20, fontSize: 16 }}

                            />

                        </View>
                        <View style={styles.time}>
                            <View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>Thời gian</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 50 }}>
                                    <TouchableOpacity>
                                        <View style={styles.dateTime}>
                                            <Text>time</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.dateTime}>
                                            <Text>time</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            {/* <View>
                <Picker
                    selectedValue={selectedValueDM}
                    style={{ height: 50, width: 165, color: "green" }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValueDM(itemValue)}
                >
                    {data.map((e, index) => (
                        <Picker.Item label={e.name_danhmuc} value={e.id_danhmuc} />
                    ))}



                </Picker>

            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPrice: {
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#E8E8E8',
        alignItems: 'center'
    },
    danhMuc: {
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10
    },
    chiTieu: {
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
    },
    ghiChu: {
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        marginTop: 10,
        height: 100
    },
    time: {
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#E8E8E8',
        marginVertical: 10,
        paddingVertical: 10
    },
    dateTime: {
        height: 30,
        width: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 10

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
export default AddSpending;