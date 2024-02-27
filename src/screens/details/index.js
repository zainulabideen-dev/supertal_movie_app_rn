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
  const [reviews, setReviews] = useState([]);

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
        setDetails(data);
        _apiReviews();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function _apiReviews() {
    try {
      setLoading(true);
      const {data, status} = await axiosClient.get(
        `movie/${item?.id}/reviews?language=en-US&page=1`,
        _getAxiosHeaders(),
      );
      setLoading(false);
      if (status == 200) {
        setReviews(data?.results);
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
                fontSize: 17,
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
          <View>
            <Text
              style={{
                borderColor: 'black',
                includeFontPadding: false,
                fontFamily: 'Poppins-SemiBold',
                color: 'black',
                marginTop: 10,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Reviews
            </Text>
            {reviews.map(item => {
              return (
                <View
                  key={item?.id}
                  style={{
                    backgroundColor: 'white',
                    marginBottom: 5,
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 50, height: 50, borderRadius: 25}}
                      source={require('../../assets/images/upload.png')}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                      }}>
                      <Text
                        style={{
                          borderColor: 'black',
                          includeFontPadding: false,
                          fontFamily: 'Poppins-SemiBold',
                          color: 'black',
                        }}>
                        {item?.author}
                      </Text>
                      <Text
                        style={{
                          includeFontPadding: false,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item?.updated_at}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      includeFontPadding: false,
                      fontFamily: 'Poppins-Regular',
                      marginTop: 15,
                    }}>
                    {item?.content.slice(0, 50)}...
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
