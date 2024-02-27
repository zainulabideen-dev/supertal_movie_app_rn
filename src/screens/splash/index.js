import {View, Text, Image, StatusBar, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 1000);
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#2C3B90'} />
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          justifyContent: 'flex-end',
        }}
        source={require('../../assets/images/splash.jpeg')}>
        <View
          style={{
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              includeFontPadding: false,
              fontFamily: 'Poppins-Bold',
            }}>
            Welcome To
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              includeFontPadding: false,
              fontFamily: 'Poppins-Bold',
            }}>
            Disney
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
