import React, {useContext} from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";
import {NavigationEvents} from '@react-navigation/compat';
import SignInForm from "../components/SignInForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SignInScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <NavigationEvents onWillBlur = {clearErrorMessage}/>
                <View style={styles.container}>
                    <SignInForm
                        navigation = {navigation}
                        headerText={'SIGN IN'}
                        submitButtonText={'SignIn'}
                        errorMessage={state.errorMessage}
                        onSubmit={ signin }
                    />
                </View>
                <View style={styles.linkContainer}>
                    <NavLink
                        routeName = {'SignUp'}
                        text={'Dont have an account? SignUp here!'}
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
        alignItems: 'center',
        marginBottom: 20
    },
});

export default SignInScreen;
