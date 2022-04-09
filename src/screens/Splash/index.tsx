import React from 'react';

import { View, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const Splash = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
});
