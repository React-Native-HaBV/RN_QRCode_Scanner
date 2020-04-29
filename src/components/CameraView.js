import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar, TouchableNativeFeedback, TouchableOpacity} from "react-native";
import {Button, Icon, Image} from 'react-native-elements';
import Spacer from "./Spacer";
import {RNCamera} from 'react-native-camera';

const CameraView = ({}) => {
    const [cameraPermission, setCameraPermission] = useState();
    const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
    const [flashModeStatus, setFlashModeStatus] = useState(RNCamera.Constants.FlashMode.off);
    const [scanned, setScanned] = useState(false);
    const [QR_Value, setQRValue] = useState('');
    const [barCodeType, setBarCodeType] = useState('');
    /* Using Camera */
    useEffect(() => {
        (async () => {
            const {status} = await RNCamera();
            setCameraPermission(status === 'granted');
        })();
    }, []);

    const BarCodeRead = result => {

        if (setScanned) {
            setQRValue(result.data);
            setBarCodeType(result.type);
        }
        console.log(barCodeType, QR_Value);
    };

    if (cameraPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    } else if (cameraPermission == false) {
        return <Text> No Access To Camera</Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}> Home Screen </Text>
                </View>
                <View style={styles.dropDownContainer}>
                    <Text style={styles.dropDown}> </Text>
                </View>
                <View style={styles.cameraContainer}>
                    <RNCamera
                        type={cameraType}
                        flashMode={flashModeStatus}
                        style={styles.cameraView}
                        // barCodeTypes={RNCamera.Constants.BarCodeType.qr}
                        // onBarCodeRead={BarCodeRead}
                    >
                        <Button
                            type="clear"
                            containerStyle={{
                                width: 55,
                                height: 55,
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                                marginLeft: 0,
                                marginTop: 0,
                            }}
                            icon={
                                <Image
                                    source={require('../assets/ic_switch_camera.png')}
                                    style={{width: 30, height: 30}}
                                    color='white'
                                />
                            }
                            onPress={() => {
                                setCameraType(
                                    cameraType === RNCamera.Constants.Type.back
                                        ? RNCamera.Constants.Type.front
                                        : RNCamera.Constants.Type.back
                                );
                            }}
                        />
                        <Button
                            type='clear'
                            containerStyle={{
                                width: 55,
                                height: 55,
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                            }}
                            icon={
                                <Image
                                    source={require('../assets/ic_flash_mode.png')}
                                    style={{width: 30, height: 30}}
                                    color='white'
                                />
                            }
                            onPress={() => {
                                setFlashModeStatus(
                                    flashModeStatus === RNCamera.Constants.FlashMode.off
                                        ? RNCamera.Constants.FlashMode.torch
                                        : RNCamera.Constants.FlashMode.off
                                );
                            }}
                        />
                        {scanned}
                    </RNCamera>
                </View>
                <View style={styles.viewQR}>
                    {/*<Text style={styles.textQR}> {QR_Value} </Text>*/}
                </View>
            </View>
        </SafeAreaView>
    );
};
const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginLeft: 20,
        // marginRight: 20
    },
    header: {
        marginTop: 20,
        fontSize: 30,
        color: 'blue',
        alignSelf: 'center',
    },
    dropDownContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
    },
    dropDown: {
        marginVertical: 10,
        fontSize: 25
    },
    cameraContainer: {
        marginTop: 20,
        flexDirection: 'column',
    },
    cameraView: {
        marginHorizontal: 20,
        height: 400,
        // backgroundColor: 'transparent',
        backgroundColor: 'gray',
        // justifyContent: 'center',
        // alignItems: 'center'
        flexDirection: 'row'
    },
    button: {
        // backgroundColor: 'transparent'
        backgroundColor: 'white'
    },
    viewQR: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
        // alignItems: 'center',
        justifyContent: 'center',

    },
    textQR: {
        marginVertical: 10,
        fontSize: 25,
        textAlign: 'center',
    },
});

export default CameraView;
