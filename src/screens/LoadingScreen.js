import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import NavLink from '../components/NavLink';


const LoadingScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>
                Loading Screen
            </Text>
            <Button
                title = " Go To SignUp Screen "
                onPress = {() => navigation.navigate('SignUp')}
            />
            <NavLink
                routeName = 'SignIn'
                text = 'Go To Sign In Screen'
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default LoadingScreen;
