import React, { useMemo } from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet } from 'react-native';
import FlatListStyles from './styles';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_MARGIN_HORIZONTAL = 10;
const CARD_WIDTH_WITH_MARGIN = ITEM_WIDTH + ITEM_MARGIN_HORIZONTAL * 2;

const ListaHorizontal = ({ data }) => {
  const snapOffsets = useMemo(() => {
    return data.map((_, i) => i * CARD_WIDTH_WITH_MARGIN);
  }, [data]);

  const renderItem = ({ item }) => {
    const isValid =
      typeof item.nome === 'string' &&
      typeof item.valor === 'string' &&
      typeof item.status === 'string';

    return (
      <View style={[styles.card, !isValid && styles.invalidCard]}>
        <Text style={FlatListStyles.nome}>
          {isValid ? item.nome : 'Nome inválido'}
        </Text>
        <Text style={FlatListStyles.valor}>
          Valor: {isValid ? item.valor : 'Valor inválido'}
        </Text>
        <Text
          style={[
            FlatListStyles.status,
            { color: item.status === 'OK' ? 'green' : 'red' },
          ]}
        >
          Status: {isValid ? item.status : 'Status inválido'}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}
      snapToAlignment="start"
      decelerationRate="fast"
      scrollEventThrottle={16}
      style={{ marginTop: 20 }}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: ITEM_MARGIN_HORIZONTAL }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2D4F3',
    height: width / 1.2,
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_MARGIN_HORIZONTAL,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  invalidCard: {
    backgroundColor: '#FFF',
  },
});

export default ListaHorizontal;
