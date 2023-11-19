import React, {useState, useEffect} from 'react';
import {
  View,Text,FlatList,TouchableOpacity,StatusBar,Image,ScrollView,ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default Discover = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'profil',
    },
    {
      nama: 'info',
    },
    {
      nama: 'hostelry',
    },
    {
      nama: 'my point',
    },
    {
      nama: 'cuaca',
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'profil',
  });

  const [dataTrending, setDataTrending] = useState([
    {
      namaTempat: 'Gunung Bromo',
      author: 'jatimQU',
      image: require('../../images/bromo.png'),
    },
    {
      namaTempat: 'Teluk Asmara',
      author: 'jatimQU',
      image: require('../../images/telukasmara.png'),
    },
    {
      namaTempat: 'Sumber Sirah',
      author: 'jatimQU',
      image: require('../../images/sumbersirah.png'),
    },
    {
      namaTempat: 'Pantai Tiga Warna',
      author: 'jatimQU',
      image: require('../../images/pantaitigawarna.png'),
    },
  ]);

  const [dataVideo, setDataVideo] = useState([
    {
      namaTempat: 'Bukit Nirvana',
      author: 'jatimQU',
      image: require('../../images/bukitnirvana.jpg'),
      length: '10:10',
    },
    {
      namaTempat: 'Bukit Teletubies',
      author: 'jatimQU',
      image: require('../../images/bukitteletubis.png'),
      length: '09:09',
    },
    {
      namaTempat: 'Kebun Teh Wonosari',
      author: 'jatimQU',
      image: require('../../images/kebuntehwonosari.png'),
      length: '12:13',
    },
    {
      namaTempat: 'Teluk Bidadari',
      author: 'jatimQU',
      image: require('../../images/telukbidadari.png'),
      length: '12:14',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#65b3f0'}}>
      <ScrollView>
        <StatusBar backgroundColor="#bac0f7" barStyle="dark-content" />
        <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
            Jatim<Text style={{color: '#172180'}}>Qu</Text>
          </Text>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor:
                    kategoriSeleksi.nama == item.nama ? '#4169e1' : '#fff',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}
                onPress={() => setKategoriSeleksi(item)}>
                <Text
                  style={{
                    color:
                      kategoriSeleksi.nama == item.nama ? '#fff' : '#212121',
                  }}>
                  {item.nama}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
              Trending
            </Text>
          </View>

          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14}}>Lihat Semua</Text>
            <Icon name="chevron-forward" size={20} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={dataTrending}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor: '#fff',
                  elevation: 8,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 200,
                    height: 150,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}
                  resizeMode={'stretch'}
                />
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.namaTempat}
                </Text>
                <Text>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
              Video Cinematic
            </Text>
          </View>

          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14}}>Lihat Semua</Text>
            <Icon name="chevron-forward" size={20} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={dataVideo}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor: '#fff',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{
                    width: 200,
                    height: 150,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}
                  resizeMode={'stretch'}>
                  <View style={{flex: 1}}>
                    <View style={{flex: 1}}></View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          paddingTop: 2,
                          paddingBottom: 2,
                        }}>
                        <Icon
                          style={{marginLeft: 5}}
                          name="play-circle"
                          size={15}
                          color="#bdbdbd"
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          paddingRight: 10,
                          paddingTop: 2,
                          paddingBottom: 2,
                          paddingLeft: 4,
                        }}>
                        <Text style={{color: '#FFFFFF'}}>{item.length}</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.namaTempat}
                </Text>
                <Text>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          backgroundColor: '#bac0f7',
        }}>
      </View>
    </View>
  );
};
