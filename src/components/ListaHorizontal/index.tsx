import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const dados = [
  { id: '1', nome: 'Item 1' },
  { id: '2', nome: 'Item 2' },
  { id: '3', nome: 'Item 3' },
  { id: '4', nome: 'Item 4' },
];

export default function ListaHorizontal() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: '#ccc',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
