/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {NativeModules} from 'react-native';
var HelloWorld = NativeModules.HelloWorld;
var MyCpp = NativeModules.MyCpp;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  // async function to call the Java native method
  async sayHiFromJava() {
    HelloWorld.sayHi( (err) => {console.log(err)}, (msg) => {console.log(msg)} );
  }

  async helloWorld() {
    try {
        let helloWorldStr = await MyCpp.helloWorld();
        console.log(helloWorldStr);
    } catch (e) {
        console.error(e);
    }
  }
  
  render() {
    this.helloWorld();
    return (
      <View style={styles.container}>
        <Text>Invoke native Java code</Text>
        <Text onPress={()=>HelloWorld.show('Awesome',HelloWorld.LONG)}>Click</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
