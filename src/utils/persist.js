import AsyncStorage from '@react-native-community/async-storage';
import {configurePersist} from 'zustand-persist';

const {persist, purge} = configurePersist({
  storage: AsyncStorage,
});

export default persist;
export {purge};
