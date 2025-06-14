import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { styles } from '../../../../styles';
import { Homestyles } from '../styles';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View>
        <Text style = {Homestyles.Title} numberOfLines={1}>Bem-Vindo</Text>

        <Text style = {Homestyles.Title}>ao</Text>

        <Text style = {Homestyles.TitleWMB} numberOfLines={1}>Digital Twin</Text>
      </View>

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
