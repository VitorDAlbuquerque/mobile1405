import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { RecipeCard } from '../src/components/RecipeCard';
import { listRecipes } from '../src/data/recipes';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.textForHome}>Receitas</Text>
            {listRecipes.map((product) => {
              return (
                <RecipeCard
                  title={product.title}
                  description={product.description}
                  instructions={product.instructions}
                  detailedInstructions={product.detailedInstructions}
                  navigation={navigation}
                />
              );
            })}
   
            </ScrollView>
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
        fontSize: 24,
    },
    textForHome:{
        fontSize: 20,
        padding:8,
    }
   
});