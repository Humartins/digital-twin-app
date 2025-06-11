import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import {styles} from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
