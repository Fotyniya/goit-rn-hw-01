import { 
    StyleSheet, 
    View, 
    ImageBackground, 
    TextInput, 
    Text, 
    TouchableOpacity,
    Image 
  } from 'react-native';

  export default function LoginScreen() {
    return (
        <View style={styles.container}>
        <ImageBackground 
            source={require("../images/PhotoBG.jpg")}
            resizeMode="cover" 
            style={styles.image}>
          <View style={styles.bgForm}>
            <Text style={styles.text} >Увійти</Text>
            <View style={styles.form}> 
              <TextInput placeholder="Адреса електронної пошти" style={styles.input}/>
              <TextInput placeholder="Пароль" secureTextEntry={true} style={styles.input}/>
              <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.btnTitle}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.btnLogin}>
                <Text style={styles.btnTitleLogin}>Немає облікового запису? Зареєструватись</Text>
              </TouchableOpacity>
            </View> 
          </View> 
        </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    text: {
      color: '#212121',
      fontSize: 30,
    },
    bgForm: {
      height: 489,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25, 
    },
    form: {
      marginHorizontal: 16,
    },
    input: {
      backgroundColor: '#F6F6F6',
      width: 343,
      height: 50,
      borderWidth: 1,
      borderColor: "#E8E8E8",
      borderRadius: 8,
      padding: 16,
      marginTop: 16,
      fontSize: 16,
    },
    button: {
      height: 50,
      borderWidth: 1,
      borderRadius: 100,
      borderColor: "#FF6C00",
      backgroundColor: '#FF6C00',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 43,
    },
    btnTitle: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    btnLogin: {
      backgroundColor: 'transparent',
    },
    btnTitleLogin: {
      color: '#1B4371',
      fontSize: 16,
    },
    addPhoto: {
      position: 'absolute',
      top: -60,
      width: 120,
      height: 120,
      borderRadius: 16,
      backgroundColor: '#F6F6F6',
    },
  });
