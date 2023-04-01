import { useState } from 'react';

import { 
  StyleSheet, 
  View, 
  ImageBackground,
  TextInput, 
  Text, 
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Svg, { Path } from "react-native-svg";

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyBoardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

    return (
      <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        
        <ImageBackground 
            source={require("../images/PhotoBG.jpg")}
            resizeMode="cover" 
            style={styles.image}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>   
          <View style={styles.bgForm}>
            <View style={styles.addPhoto}>
              <TouchableOpacity activeOpacity={0.7} style={styles.btnAdd}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                  <Path fill="#FF6C00" fill-rule="evenodd" d="M7 0H6v6H0v1h6v6h1V7h6V6H7V0Z" clip-rule="evenodd"/>
                </Svg>
              </TouchableOpacity>
            </View>
            <Text style={styles.title} >Регистрация</Text>  
            <View style={styles.form}> 
                <TextInput 
                  placeholder="Логин" 
                  placeholderTextColor='#BDBDBD' 
                  style={styles.input}
                  value={state.login} 
                  onChangeText={
                    (value)=>setState(prevState => ({...prevState, login: value}))
                  } />
                <TextInput 
                  placeholder="Адрес электронной почты" 
                  placeholderTextColor='#BDBDBD' 
                  style={styles.input}
                  value={state.email} 
                  onChangeText={
                    (value)=>setState(prevState => ({...prevState, email: value}))
                  } />
                <TextInput 
                  placeholder="Пароль"
                  placeholderTextColor='#BDBDBD' 
                  secureTextEntry={true} 
                  style={styles.input}
                  value={state.password}
                  onFocus={()=>{setIsShowKeyBoard(true)}}
                  onChangeText={
                    (value)=>setState(prevState => ({...prevState, password: value}))
                  } />
              
              
            </View> 
            
          </View>
          </KeyboardAvoidingView>
          <View style={styles.btnRegistration} >
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={keyBoardHide} >
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.btnLogin}>
              <Text style={styles.btnTitleLogin}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View> 
        </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
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
    title: {
      color: '#212121',
      fontFamily: 'Roboto-Medium',
      fontSize: 30,
      lineHeight: 35.16,
      letterSpacing: 0.01,
      marginTop: 92,
    },
    bgForm: {
      height: 549,
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
      marginBottom: 207,
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
    btnRegistration: {
      marginHorizontal: 16,
      position: 'absolute',
      bottom: 78,
    },
    btnLogin: {
      backgroundColor: 'transparent',
    },
    btnTitleLogin: {
      fontFamily: 'Roboto-Regular',
      lineHeight: 19,
      color: '#1B4371',
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
      marginBottom: 16,
    },
    btnTitle: {
      fontFamily: 'Roboto-Regular',
      lineHeight: 19,
      color: '#FFFFFF',
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
    btnAdd: {
      position: 'absolute',
      bottom: 14,
      right: -12,
      width: 25,
      height: 25,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: "#FF6C00",
      justifyContent: 'center',
      alignItems: 'center',
    },
  });