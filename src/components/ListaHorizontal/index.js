import React from "react";
import { FlatList, View, Dimensions, Text, StyleSheet } from "react-native";
import FlatListStyles from "./styles";

const { width } = Dimensions.get('window')

const ListaHorizontal = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40 + (i - 1) * 40))}
            horizontal
            snapToAlignment={"start"}
            scrollEventThrottle={16}
            decelerationRate='fast'
            style={{
                marginTop: 150
            }}
            renderItem={({ item }) => {
                const isValid = (
                    typeof item.nome === 'string' &&
                    typeof item.valor === 'string' &&
                    typeof item.status === 'string'
                );

                return (
                    <View style={[CardStyle.card, !isValid && { backgroundColor: '#ccc' }]}>
                        <Text style={FlatListStyles.nome}>
                            {typeof item.nome === 'string' ? item.nome : 'Nome inválido'}
                        </Text>
                        <Text style={FlatListStyles.valor}>
                            Valor: {typeof item.valor === 'string' ? item.valor : 'Valor inválido'}
                        </Text>
                        <Text
                            style={[
                                FlatListStyles.status,
                                { color: item.status === 'OK' ? 'green' : 'red' },
                            ]}
                        >
                            Status: {typeof item.status === 'string' ? item.status : 'Status inválido'}
                        </Text>
                    </View>
                );
            }}

        />
    );
};

const CardStyle = StyleSheet.create({
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