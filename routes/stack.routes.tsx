import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../src/screens/Splash/SplashScreen";
import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Main"
        component={TabRoutes}
      />
    </Stack.Navigator>
  );
}
