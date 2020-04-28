import React from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <Button
                title = " Go back Loading Screen"
                onPress = {() => navigation.goBack('Loading')}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default HomeScreen;
