import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, useWindowDimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';

import Colors from '../../constants/Colors';


export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();
  return (
    <Drawer 
      backBehavior='history'
      screenOptions={{
        drawerType: width <= 500 ? 'permanent' : 'front',
      }}>
        <Drawer.Screen
          name="index"
          options={{
              title: 'Home',
              drawerLabel: 'Home',
          }}
          />
        <Drawer.Screen
          name="two"
          options={{
              title: 'Two',
              drawerLabel: 'Two',
          }}  
        />
        <Drawer.Screen
          name="[dynamic]"
          options={{
              title: 'Dynamic',
              drawerLabel: 'Dynamic',
              href: {
                pathname: '/[dynamic]',
                params: {
                  dynamic: 'test',
                },
              },
          }}
        />
      </Drawer>
  );
}
