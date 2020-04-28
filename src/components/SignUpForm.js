import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import {Text, Button, Input, Image} from 'react-native-elements';
import Spacer from './Spacer';

const SignUpForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <KeyboardAvoidingView style={styles.container}>
                <TouchableWithoutFeedback style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <Spacer>
                                <Text style={styles.header}> {headerText}</Text>
                            </Spacer>
                        </View>
                        <View style={styles.inforContainer}>
                            <Input
                                placeholder="Name"
                                label="Name"
                                value={name}
                                onChangeText={setName}
                                returnKeyType={"next"}
                                autoCapitalize="none"
                                autoCorrect={false}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: "normal"
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnUsername.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20
                                }}
                            />
                            <Spacer/>
                            <Input
                                placeholder="Email"
                                label="Email"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType={"email-address"}
                                returnKeyType={"next"}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: "normal"
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnEmail.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20
                                }}
                            />
                            <Spacer/>
                            <Input
                                placeholder="Password"
                                label="Password"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType={"next"}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: "normal"
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnmatkhau.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20
                                }}
                            />
                            <Spacer/>
                            <Input
                                placeholder="Confirm Password"
                                label="Confirm Password"
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"
                                returnKeyType={"next"}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: "normal"
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnmatkhau.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20
                                }}
                            />
                            <Spacer/>
                            <Input
                                placeholder="Phone"
                                label="Phone"
                                value={phone}
                                onChangeText={setPhone}
                                autoCapitalize="none"
                                autoCorrect={false}
                                labelStyle={{
                                    color: 'black',
                                    fontWeight: "normal"
                                }}
                                leftIcon={
                                    <Image
                                        source={require('../assets/ic_auth/ic_dnPhone.png')}
                                        style={{width: 30, height: 30}}
                                        color='gray'
                                    />
                                }
                                leftIconContainerStyle={{
                                    marginLeft: 0,
                                    marginRight: 20
                                }}
                            />
                        </View>
                        <View style={styles.errorContainer}>
                            {errorMessage ? <Text style={styles.errorMessage}> {errorMessage} </Text> : null}
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                title={submitButtonText}
                                titleStyle={{
                                    fontSize: 30,
                                }}
                                buttonStyle={{
                                    borderRadius: 27
                                }}
                                // onPress={() => onSubmit({email, password})}
                                onPress={() => navigation.navigate('SignIn')}
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
        // justifyContent: "center",
        // marginLeft: 20,
        // marginRight: 20
    },
    header: {
        fontSize: 30,
        color: 'blue',
        alignSelf: 'center',
    },
    headerContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
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
        alignContent: 'center'
    },
    button: {
        // marginLeft: 30,
        // marginRight: 30,
        marginHorizontal: 50,
        marginTop: 30,
    },
});

export default SignUpForm;



