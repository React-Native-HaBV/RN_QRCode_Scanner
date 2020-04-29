import React, {useContext} from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";
import SignUpForm from "../components/SignUpForm";
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from '@react-navigation/compat';

const SignUpScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <NavigationEvents onWillBlur = {clearErrorMessage} />
                <View style={styles.container}>
                    <SignUpForm
                        navigation={navigation}
                        headerText=" SIGN UP "
                        errorMessage={state.errorMessage}
                        submitButtonText=" SignUp "
                        onSubmit={signup}
                    />
                </View>
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
        marginBottom: 20,
        alignItems: 'center'
    },
});

export default SignUpScreen;
