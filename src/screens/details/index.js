import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {_getAxiosHeaders, _getPhotoUrl, axiosClient} from '../../config/apis';
import {LoaderModal} from '../../modal/LoaderModal';

export default function DetailsScreen({route}) {
  let {item} = route.params;
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();

  useEffect(() => {
    _apiGetMovieDetails();
  }, []);

  async function _apiGetMovieDetails() {
    try {
      setLoading(true);
      const {data, status} = await axiosClient.get(
        `movie/${item?.id}?language=en-US`,
        _getAxiosHeaders(),
      );
      setLoading(false);
      if (status == 200) {
        console.log('=>details: ', data);
        setDetails(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#2C3B90'} />
      <LoaderModal visible={loading} />
      <Image
        resizeMode="contain"
        style={{
          height: 230,
          width: 170,
          marginVertical: 10,
          position: 'absolute',
          zIndex: 2,
        }}
        source={{uri: _getPhotoUrl(item?.poster_path)}}
      />
      <ImageBackground
        resizeMode="cover"
        style={{
          width: '100%',
          height: 250,
          opacity: 0.5,
        }}
        source={{uri: _getPhotoUrl(item?.poster_path)}}></ImageBackground>
      <ScrollView>
        <View
          style={{
            width: '100%',
            padding: 15,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              includeFontPadding: false,
              fontFamily: 'Poppins-SemiBold',
            }}>
            {details?.original_title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                borderColor: 'black',
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderWidth: 1,
                includeFontPadding: false,
                fontFamily: 'Poppins-Regular',
                color: 'black',
              }}>
              PG-13
            </Text>
            <Text
              style={{
                borderColor: 'black',
                includeFontPadding: false,
                fontFamily: 'Poppins-Regular',
                color: 'black',
                marginLeft: 10,
              }}>
              {details?.release_date}
            </Text>
            <View>
              <Text
                style={{
                  borderColor: 'black',
                  includeFontPadding: false,
                  fontFamily: 'Poppins-Regular',
                  color: 'black',
                  marginLeft: 10,
                }}>
                Adventure, Action
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                borderColor: 'black',
                includeFontPadding: false,
                fontFamily: 'Poppins-SemiBold',
                color: 'black',
                marginTop: 10,
              }}>
              Overview
            </Text>
            <Text
              style={{
                includeFontPadding: false,
                fontFamily: 'Poppins-Regular',
                marginTop: 10,
              }}>
              {details?.overview}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
