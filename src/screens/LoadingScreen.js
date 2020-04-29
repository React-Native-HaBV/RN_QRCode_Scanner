import React, {useEffect, useContext, useState} from "react";
import {Text, View, Button, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/AuthContext';
import auth, {firebase} from "@react-native-firebase/auth";

const LoadingScreen = ({navigation}) => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text> Loading </Text>
                <Spacer/>
                <ActivityIndicator size={"large"}/>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default LoadingScreen;
