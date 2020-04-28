import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import {Text, Button, Input, Image} from 'react-native-elements';
import Spacer from './Spacer';


const SignInForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require('../assets/qr_code.png')}
                            />
                            <Spacer>
                                <Text style={styles.title}> {headerText}</Text>
                            </Spacer>
                        </View>
                        <View style={styles.inforContainer}>
                            <Input
                                placeholder="Email"
                                label="Email"
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={email}
                                onChangeText={setEmail}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: 'normal',
                                }}
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20,
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnEmail.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                            />
                            <Spacer/>
                            <Input
                                placeholder="Password"
                                label="Password"
                                returnKeyType={"done"}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: 'normal',
                                }}
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20,
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnmatkhau.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                            />
                        </View>
                        <View>
                            {errorMessage ? <Text style={styles.errorMessage}> {errorMessage} </Text> : null}
                        </View>
                        <View>
                            <Button
                                style={styles.button}
                                title={submitButtonText}
                                titleStyle={{
                                    fontSize: 30,
                                }}
                                buttonStyle={{
                                    borderRadius: 27,
                                }}
                                // onPress={() => onSubmit({email, password})}
                                onPress={() => navigation.navigate('Home')}
                            />
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    logo: {
        height: 200,
        width: 200,
    },
    logoContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'gray'
    },
    title: {
        fontSize: 30,
        color: 'blue',
        alignSelf: 'center',
        // marginTop: 50,
    },
    inforContainer: {
        margin: 20
    },
    errorContainer: {
        marginTop: 10,
        backgroundColor: 'gray',
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginHorizontal: 20,
        // marginTop: 15,
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        // marginLeft: 30,
        // marginRight: 30,
        marginHorizontal: 50,
        marginTop: 30,
    },
});

export default SignInForm;
