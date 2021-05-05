import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import {GoogleSignin,statusCodes} from '@react-native-community/google-signin'


export default class App extends Component{
  state={
    userInfo:''
  }
	LOGIN_WITH_GOOGLE = async () => {
    console.log("Hello")
    GoogleSignin.configure({
      AndroidClientId:
        '285761522095-h48pjdmc4veht28glpd902n1b9utlnbr.apps.googleusercontent.com',
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo:userInfo.user});
      // console.log(userInfo.user,JSON.stringify());
      console.log(this.state.userInfo.email,'data stored')
      // console.log(userInfo.email,'kamal')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };
  render(){
    console.log(this.state.userInfo,'check comming or not')
  return(
    <View style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={()=>this.LOGIN_WITH_GOOGLE()}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>LoginWith Google</Text>
      </TouchableOpacity>
      <Text>{this.state.userInfo.email}</Text>
      <Text>{this.state.userInfo.id}</Text>
       <Text>{this.state.userInfo.name}</Text>

    </View>
  )
  }
}