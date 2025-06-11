import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from '../../../styles';
import { Homestyles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={Homestyles.inlineText}>Bem-vindo ao Digital Twin</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sensors')}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
