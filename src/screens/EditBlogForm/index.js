import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
const win = Dimensions.get('window');
const winWidht = Dimensions.get('screen').width;
const winHeight = Dimensions.get('screen').height;

export default function AddResep() {
  const nav = useNavigation();
  const route = useRoute();
  const [inputTitle, setInputTitle] = useState(route.params?.data.title);
  const [inputDesc, setInputDesc] = useState(route.params?.data.desc);
  const [inputImage, setInputImage] = useState(route.params?.data.image);
  const [inputName, setInputName] = useState(route.params?.data.name);

  async function putData() {
    try {
      var id = route.params?.data.id;
      const data = await fetch(
        'https://657aaf9c1acd268f9afb9324.mockapi.io/jatimqu/' + id,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: inputTitle,
            image: inputImage,
            desc: inputDesc,
            name: inputName,
          }),
        },
      );
      console.log(await data.json());
      console.log(id);
      nav.navigate('Discover');
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteData() {
    try {
      var id = route.params?.data.id;
      const data = await fetch(
        'https://65645833ceac41c0761df458.mockapi.io/este/resep/' + id,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: inputTitle,
            image: inputImage,
            desc: inputDesc,
            name: inputName,
          }),
        },
      );
      console.log(await data.json());
      console.log(id);
      nav.navigate('Discover');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Edit Story</Text>
      </View>
      <View style={styles.cardContent}>
        <TextInput
          style={styles.cardTextInput}
          autoFocus
          value={inputTitle}
          onChangeText={text => setInputTitle(text)}
          placeholder="Judul Story"
          placeholderTextColor="#DDD"
        />
        <Image style={styles.iklanImage} source={{uri: inputImage}} />
        <TextInput
          style={styles.cardTextInput}
          autoFocus
          value={inputImage}
          onChangeText={text => setInputImage(text)}
          placeholder="Gambar "
          placeholderTextColor="#DDD"
        />
        <TextInput
          style={styles.cardTextInput}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          value={inputDesc}
          onChangeText={text => setInputDesc(text)}
          placeholder="Deskripsi "
          placeholderTextColor="#DDD"
        />
        <TextInput
          style={styles.cardTextInput}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={inputName}
          onChangeText={text => setInputName(text)}
          placeholder="cerita pengalamanmu"
          placeholderTextColor="#DDD"
        />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.cardButton} onPress={putData}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.cardButton} onPress={deleteData}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 64,
  },
  cardHeader: {
    justifyContent: 'center',
    marginHorizontal: 16,
    width: winWidht - 32,
    height: 64,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 8,
    width: winWidht - 32,
    borderColor: '#DDD',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 16,
  },
  cardTextInput: {
    borderRadius: 4,
    borderColor: '#DDD',
    borderWidth: 1,
    color: '#000',
    paddingLeft: 8,
    fontSize: 16,
    marginBottom: 8,
  },
  cardFooter: {
    width: winWidht - 32,
    marginHorizontal: 16,
    padding: -30,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  cardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    width: winWidht - 48,
    backgroundColor: '#4d8bf0',
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  iklanImage: {
    marginTop: -61,
    borderRadius: 15,
    width: win.width - 64,
    height: 212,
  },
});
