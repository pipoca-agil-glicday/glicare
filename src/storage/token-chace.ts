import * as SecureStore from "expo-secure-store"

async function getToken(key: string) {
  try {
    return SecureStore.getItem(key)
  }catch (err) {
    console.log("falha em pegar o token: " + err)
  }
}
async function saveToken(key: string, value: string) {
  try {
    return SecureStore.setItemAsync(key, value)
  }catch (err) {
    console.log("falha em salvar o token: " + err)
  }
}

export const tokenChace = { getToken, saveToken }