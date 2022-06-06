import react from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Pressable,
  Linking,
} from "react-native";

const colorGithub = "#010409";
const colorFontGithub = "#C9D1D9";
const colorDarkFontGithub = "#4F565E";
const imageProfileGithub =
  "https://avatars.githubusercontent.com/u/87508772?v=4";

const urlToMyGithub = "https://github.com/ThelmaGuerra";

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} />
      <View style={style.content}>
        <Image
          accessibilityLabel="foto de perfil do github"
          style={style.avatar}
          source={{ uri: imageProfileGithub }}
        />
        <Text
          accessibilityLabel="nome Thelma Guerra"
          style={[style.defaultText, style.name]}
        >
          Thelma Guerra
        </Text>
        <Text
          accessibilityLabel="nickname @thelmaguerra"
          style={[style.defaultText, style.nickname]}
        >
          @ThelmaGuerra
        </Text>
        <Text
          accessibilityLabel="texto sobre mim"
          style={[style.defaultText, style.description]}
        >
          I'm a Web developer, knowledgeable of the front-end development
          pipeline stages, including testing and deployment. I have experience
          developing scalable web applications using React, using UI/UX and OOP
          concepts.
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 1,
  },
  defaultText: {
    color: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
