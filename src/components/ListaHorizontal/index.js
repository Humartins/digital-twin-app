import React from "react";
import { FlatList, View, Dimensions, Text, StyleSheet } from "react-native";
import FlatListStyles from "./styles";

const { width } = Dimensions.get('window')

const ListaHorizontal = ({ data }) => {
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator = {false}
        snapToOffsets={[... Array(data.length)].map((x , i)=> i * (width * 0.8- 40 + (i-1) * 40))}
        horizontal
        snapToAlignment = {"start"}
        scrollEventThrottle= {16}
        decelerationRate= 'fast'
        style = {{
            marginVertical:175
        }}
        renderItem={({item}) => (
            <View style = {Cardstyles.card}>
                <Text style = {FlatListStyles.nome}>{item.nome}</Text>
                <Text style = {FlatListStyles.valor}>Valor: {item.valor}</Text>
                <Text style = {[FlatListStyles.status, {color: item.status === 'OK' ? 'green' : 'red'} 
                ]}
                >
                    Status: {item.status}
                </Text>
            
            </View> 
        )}
        />
    );
};

const Cardstyles = StyleSheet.create({
  card: {
    backgroundColor: '#F2D4F3',
    height: width / 1.2,
    width: width * 0.8,
    marginHorizontal: 10,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default ListaHorizontal;