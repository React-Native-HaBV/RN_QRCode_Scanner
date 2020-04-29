import React from "react";
import {Text, View, StyleSheet, SafeAreaView, Button} from "react-native";
import CameraView from "../components/CameraView";


const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <CameraView>

            </CameraView>
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
