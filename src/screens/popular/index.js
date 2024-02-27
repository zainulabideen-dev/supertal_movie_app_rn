import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  _getAxiosHeaders,
  axiosClient,
  epGetPopularMovies,
} from '../../config/apis';
import {LoaderModal} from '../../modal/LoaderModal';
import MovieComp from '../../component/MovieComp';

export default function PopularMoviesScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    _apiGetPopulartMovies();
  }, []);

  async function _apiGetPopulartMovies() {
    try {
      setLoading(true);
      const {data, status} = await axiosClient.get(
        epGetPopularMovies,
        _getAxiosHeaders(),
      );
      setLoading(false);
      if (status == 200) {
        setList(data?.results);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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
