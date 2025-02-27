import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import GlicareLogo from "../../../assets/svg/glicare/logo-glicare";
import Button from "@/components/ui/button";

import * as WebBroser from  "expo-web-browser"
import * as Liking from "expo-linking"

import { useOAuth } from '@clerk/clerk-expo'

WebBroser.maybeCompleteAuthSession()

export default function SignIn() {
  const [ isLoading, setIsLoading ] = useState(false);
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  async function onGoogleSignIn () {
    try {
      setIsLoading(true)
      const redirectUrl = Liking.createURL("/")
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })

      if(oAuthFlow.authSessionResult?.type === "success" ){
        if(oAuthFlow.setActive){
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
        }
      }else {
        setIsLoading(false)
      }
    }catch (err){
      console.log(err + "error na auth")
      setIsLoading(false)
    }
  }
  useEffect(() => {
    WebBroser.warmUpAsync()

    return () => {
      WebBroser.coolDownAsync()
    }
  }, [])
  return (
    <View className="flex justify-center gap-10 items-center h-screen">
      <GlicareLogo />
      <View className="w-80">
        <Text className="text-center font-normal text-black text-2xl">
          Registro de glicose para pessoas com diabetes tipo 2.
        </Text>
      </View>
      <Button icon="logo-google" onPress={onGoogleSignIn} isLoading={isLoading}>
        Entrar com Google
      </Button>
      <View>
        <Text className="text-center font-semibold text-black text-base w-96">
          Ao fazer o login, você concorda com nossos{" "}
          <Text className="text-blue">
            Termos de Uso e Política de Privacidade.
          </Text>
        </Text>
      </View>
    </View>
  );
}
