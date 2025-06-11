import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../../styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import {Splashstyles} from './styles'

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo.png')} 
        style={Splashstyles.logo} 
        resizeMode="contain"
      />
      <Text style={Splashstyles.subtitle}>Carregando...</Text>
    </View>
  );
}
