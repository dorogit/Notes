import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from './src/context/NotesContext';
import IndexScreen from './src/screens/IndexScreen';
import NoteScreen from './src/screens/NoteScreen';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}