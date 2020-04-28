import React from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";
import SignUpForm from "../components/SignUpForm";
import Spacer from "../components/Spacer";
import NavLink from '../components/NavLink';


const SignUpScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <SignUpForm
                        headerText=" SIGN UP "
                        // errorMessage={state.errorMessage}
                        submitButtonText=" SignUp "
                        // onSubmit={signup}
                    />
                </View>
                <Spacer/>
                <Button
                    title = " Loading Screen "
                    onPress = {() => navigation.navigate('SignIn')}
                />
                <View style={styles.linkContainer}>
                    <NavLink
                        routeName = {'SignIn'}
                        text={'You have an account? SignIn here!'}
                    />
                </View>
            </View>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linkContainer: {
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center'
    },
});

export default SignUpScreen;
