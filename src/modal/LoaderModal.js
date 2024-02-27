import React from 'react';
import {
  Dimensions,
  Modal,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

export const LoaderModal = ({visible, label = 'Loading...'}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.25)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}>
          <ActivityIndicator size="small" color="#0000ff" />
          <Text style={{color: 'black', marginLeft: 20}}>{label}</Text>
        </View>
      </View>
    </Modal>
  );
};
