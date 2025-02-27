import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

import logo from "../../assets/logo.png";
import GoogleIcon from '@expo/vector-icons/AntDesign';
import Homepage from './Homepage';

export default function Loginpage() {
    return (
        <View className='flex-1 items-center justify-center bg-[#FBFBFB] text-base'>
            <Image source={logo} contentFit='cover' />
            <Text className='mb-8 mt-12 text-2xl text-center max-w-[300px] font-normal'>
                Registro de glicose para pessoas com diabetes tipo 2.
            </Text>
            <TouchableOpacity className='flex-1 rounded-full bg-[#1365A0] min-w-[320px] justify-center flex-row items-center max-h-12' onPress={() => Alert.alert('Entrando!')}>
                <GoogleIcon name="google" size={20} color="white" />
                <Text className='p-2 text-white text-center font-semibold' >
                    Entrar com Google
                </Text>
            </TouchableOpacity>
            <Text className='mt-8 text-center max-w-[300px] font-medium'>
                Ao fazer login você concorda com nossos
                <Text className='text-bold text-[#1365A0]'>
                    Termos de Uso e Política de Privacidade.
                </Text>
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}