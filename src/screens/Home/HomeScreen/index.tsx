import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { styles } from '../../../../styles';
import { Homestyles } from '../styles';

type BottomTabParamList = {
  Home: undefined;
  Sensores: undefined;
  Histórico: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  return (
    <View style={styles.container}>
      <View>
        <Text style={Homestyles.Title} numberOfLines={1}>Bem-Vindo</Text>
        <Text style={Homestyles.Title}>ao</Text>
        <Text style={Homestyles.TitleWMB} numberOfLines={1}>Digital Twin</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sensores')}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
