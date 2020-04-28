import React from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";
import SignInForm from "../components/SignInForm";

const SignInScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <SignInForm
                        headerText={'SignIn Screen'}
                        submitButtonText={'SignIn'}
                    />
                </View>
                <Button
                    title = " Go To Home Screen "
                    onPress = {() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default SignInScreen;
