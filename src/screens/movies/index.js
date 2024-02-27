import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  _getAxiosHeaders,
  axiosClient,
  epGetLatestMovies,
} from '../../config/apis';
import {LoaderModal} from '../../modal/LoaderModal';
import MovieComp from '../../component/MovieComp';

export default function MoviesScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    _apiGetLatestMovies();
  }, []);

  async function _apiGetLatestMovies() {
    try {
      setLoading(true);
      const {data, status} = await axiosClient.get(
        epGetLatestMovies,
        _getAxiosHeaders(),
      );
      setLoading(false);
      if (status == 200) {
        setList(data?.results);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={{flex: 1, padding: 5}}>
      <LoaderModal visible={loading} />
      <FlatList
        numColumns={2}
        data={list}
        renderItem={({item}) => (
          <MovieComp
            item={item}
            itemPressed={item => navigation.navigate('DetailsScreen', {item})}
          />
        )}
        keyExtractor={item => item?.id}
      />
    </View>
  );
}
