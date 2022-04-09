import React from 'react';

import { SafeAreaView, View, Text, StyleSheet} from 'react-native';

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
