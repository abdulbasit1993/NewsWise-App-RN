import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NewsContext} from '../API/Context';

const Search = () => {
  const {
    news: {articles},
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const handleModal = n => {
    setModalVisible(true);
    setCurrentNews(n);
  };

  const handleSearch = text => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter(query => query.title.includes(text)));
  };

  return (
    <View style={{width: '100%', position: 'relative'}}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: 'black',
          color: 'white',
        }}
        onChangeText={text => handleSearch(text)}
        placeholder="Search for News"
        placeholderTextColor={'white'}
      />

      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map(n => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            //   onPress={() => handleModal(n)}
          >
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: 'black',
                color: 'white',
              }}>
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
});

export default Search;
