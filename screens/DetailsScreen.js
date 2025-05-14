import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
    const { title, detailedInstructions } = route.params; 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.textForDetails}>{detailedInstructions}</Text>
            <Button
                title="home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 600,
        fontSize: 24,
    },
    textForDetails: {
        fontSize: 20,
        padding: 8,
    },
});