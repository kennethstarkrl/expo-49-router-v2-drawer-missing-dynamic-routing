import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function DrawerDynamicScreen() {
  const { dynamic } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dynamic Drawer Dynamic Param: { dynamic }</Text>
      <Text style={{color:'white'}}>This is a dynamic drawer screen. The Dynamic param should load from the href object passed in the drawer screen options same as it would for tabs defined here:</Text>
      <Link href="https://docs.expo.dev/router/advanced/tabs/#dynamic-routes" style={{color:'blue'}}>Dyanmic Tabs Params Expo Docs</Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(drawer)/[dynamic].tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
