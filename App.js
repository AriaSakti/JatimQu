import React, {useState} from 'react'
import { Dimensions, ScrollView, StyleSheet, TextInput, View, StatusBar, Text, Image, TouchableOpacity} from 'react-native'
import { SearchNormal1, Book1, Location, Profile, Moon, Map, Coin, MedalStar, More, Activity, Add, Lovely,Cloud } from 'iconsax-react-native';
import logo from './src/images/JatimQuu.png'
const win = Dimensions.get('window')

export default function App() {
  const [selected, setSelected] = useState(0)
  return (
    <ScrollView style={ styles.container }>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
      <View style={ styles.header }></View>
      <Image style={ styles.logoHeader } source={ logo }/>
      <View style={ styles.searchContainer }>
        <SearchNormal1 variant='Linear' color='blue' style={{ marginLeft: 12, }} />
        <TextInput style={ styles.search } placeholder='tempat mana yang ingin kamu ketahui?' placeholderTextColor={'grey'}></TextInput>
      </View>
      <View style={ styles.categoryContainer }>
        <TouchableOpacity style={[ styles.categoryContainer2,{ backgroundColor: selected == 1 ? '#88c2db' : '#aecafc' }]} onPress={()=> setSelected(1)}>
          <Book1 size="16" color="blue"/>
          <Text style={ styles.category }>Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[ styles.categoryContainer2,{ backgroundColor: selected == 2 ? '#88c2db' : '#aecafc' }]} onPress={()=> setSelected(2)}>
        <Moon size="16" color="blue" variant="Bold"/>
          <Text style={ styles.category }>hostelry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[ styles.categoryContainer2,{ backgroundColor: selected == 3 ? '#88c2db' : '#aecafc' }]} onPress={()=> setSelected(3)}>
        <Coin size="16" color="blue" variant="Bold"/>
          <Text style={ styles.category }>my point</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[ styles.categoryContainer2,{ backgroundColor: selected == 4 ? '#88c2db' : '#aecafc' }]} onPress={()=> setSelected(4)}>
        <Cloud size="16" color="blue" variant="Bold"/>
          <Text style={ styles.category }>Cuaca</Text>
        </TouchableOpacity>

      </View>
      <View style={ styles.fiturContainer }>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Location size={54} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Profile size={54} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <MedalStar size={54} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Map size={54} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>Rute</Text>
        </TouchableOpacity>

      </View>
      <View style={ styles.fiturContainer }>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Activity size={50} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>aktifitas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Lovely size={50} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.fiturContainer2 }>
          <Add size={50} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>Add Menu</Text>
        </TouchableOpacity>
        <View style={ styles.fiturContainer2 }>
          <More size={50} variant='Linear' color='blue' />
          <Text style={ styles.fiturText }>More</Text>
        </View>
      </View>
      <ScrollView horizontal style={ styles.iklanContainer }>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Keindahan Jawa Timur</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/841/803/723/5bd3882fae229-wallpaper-preview.jpg' }} />
          <Text style={ styles.iklanTextHeader }>Pesona Alam yang Indah Untuk di jelajahi</Text>
          <Text style={ styles.iklanTextSponsored }>by JatimQu</Text>
        </View>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Kunjungi Sekarang</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://blog-media.lifepal.co.id/wp-content/uploads/2019/06/wisata-jawa-timur-4.jpg' }} />
          <Text style={ styles.iklanTextHeader }>Pantai indah,untuk Family Time</Text>
          <Text style={ styles.iklanTextSponsored }>by JatimQu</Text>
        </View>
        <View style={ styles.iklanContainer2 }>
          <Text style={ styles.iklanHeader }>Banyak Rekomendasi tempat</Text>
          <Image style={styles.iklanImage} source={{ uri: 'https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2019/04/63254437_L.jpg' }} />
          <Text style={ styles.iklanTextHeader }>Kunjungi daerah jatim yang indah</Text>
          <Text style={ styles.iklanTextSponsored }>by JatimQu</Text>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0edfc',
  },

  header: {
    height: 136,
    backgroundColor: '#3fcdfc',
  },

  logoHeader: {
    width: win.width,
    height:100,
    
    position: 'absolute',
    alignSelf: 'center',
    top: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 32,
    borderRadius: 10,
    marginTop: -28,
  },

  search: {
    marginHorizontal: 8,
    color: 'grey',
    width: win.width-112,
  },

  categoryContainer: {
    marginHorizontal: 32,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 6,
    marginHorizontal: 4,
  },
  
  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 112,
    marginHorizontal: 32,
    elevation: 10,
    backgroundColor: '#c0edfc',
  },

  fiturContainer2: {
    alignItems: 'center',
    marginTop: 14,
  },

  fiturText: {
    color: 'black',
    marginTop: 6,
    fontSize: 12,
  },

  iklanContainer: {
    marginTop: 16,
    height:300,
    marginHorizontal: 8,
  },

  iklanContainer2: {
    marginTop: 2,
    marginHorizontal: 8,
  },

  iklanHeader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 22,

  },

  iklanImage: {
    marginTop: 6,
    borderRadius: 15,
    width: win.width-64,
    height:212,
  },

  iklanTextHeader: {
    fontSize: 16,
    marginTop: 6,
    color: 'black',
    fontWeight: 'bold',
  },

  iklanTextSponsored: {
    marginTop: 2,
    color: 'grey',
  },
})