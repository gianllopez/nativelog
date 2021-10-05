import * as SecureStore from 'expo-secure-store';

async function write(value) {
  try {
    await SecureStore.setItemAsync('TOKEN', value);
  } catch (err) {
    alert('An error has ocurred. Please restart the app.');
  };
};

async function get() {
  return await SecureStore.getItemAsync('TOKEN');
};

async function remove() {
  try {
    await SecureStore.deleteItemAsync('TOKEN');
  } catch (err) {
    alert('An error has ocurred. Please restart the app.');
  };
};

export { write, get, remove };
