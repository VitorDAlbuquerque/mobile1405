import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export function RecipeCard({title, description, instructions, detailedInstructions, navigation}) {
    return(
        <View style={style.container}>
           

            <Text style={style.title}>{title}</Text>
            <Text style={style.text}> {description} </Text> 
            <Text style={style.text}> {instructions}</Text>
             <Button
            title="Veja mais sobre a receita"
            onPress={() => navigation.navigate('Details', {title, detailedInstructions})}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: "100%",
        height: 400,
        marginVertical: 40,
        borderRadius: 10,

  

    },
    
    title: {
        fontWeight: "bold",
        fontSize: 20 ,  
    },
    text: {
        fontSize: 15,
    }
})