import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Certifique-se de que a rota seja "Home", não "HomeScreen"
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/favicon.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Digital Twin</Text>
      <Text style={styles.subtitle}>Carregando...</Text>
    </View>
  );
}
