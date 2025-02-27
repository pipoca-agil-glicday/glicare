import { View, Text } from 'react-native'
import GlicareLogo from '../../assets/svg/glicare/logo-glicare'
import Button from '@/components/ui/button';

export default function Home() {
  return (
    <View className="flex justify-center gap-10 items-center h-screen">
      <GlicareLogo />
        <View className='w-80'> 
          <Text className='text-center font-normal text-black text-2xl'>Registro de glicose para pessoas com diabetes tipo 2.</Text>
        </View>
          <Button icon="logo-google" >Entrar com Google</Button>
        <View>
          <Text className='text-center font-semibold text-black text-base'> Ao fazer o login, você concorda com nossos <Text className='text-blue'>Termos de Uso e Política de Privacidade.</Text></Text>
        </View>
    </View>
  )
}