import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {_getPhotoUrl} from '../config/apis';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressCircle from 'react-native-progress-circle';

export default function MovieComp({item, itemPressed}) {
  return (
    <View
      style={{
        width: '48%',
        backgroundColor: 'white',
        elevation: 1,
        borderRadius: 10,
        marginBottom: 5,
        margin: 5,
      }}>
      <ImageBackground
        resizeMode="cover"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        style={{
          width: '100%',
          height: 260,
        }}
        source={{uri: _getPhotoUrl(item?.poster_path)}}>
        <View style={{flex: 0.5, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => itemPressed(item)}
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: 10,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Entypo color="black" name="dots-three-horizontal" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
          <View
            style={{
              marginLeft: 5,
              marginBottom: -15,
            }}>
            <ProgressCircle
              percent={30}
              radius={20}
              borderWidth={3}
              color="green"
              shadowColor="black"
              bgColor="black">
              <Text style={{fontSize: 10, color: 'white'}}>{'30%'}</Text>
            </ProgressCircle>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 20,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            includeFontPadding: false,
            fontFamily: 'Poppins-SemiBold',
          }}>
          {item?.original_title}
        </Text>
        <Text
          style={{
            includeFontPadding: false,
            marginTop: 2,
          }}>
          {item?.release_date}
        </Text>
      </View>
    </View>
  );
}
