import AsyncStorage from '@react-native-community/async-storage'
import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'
import Config from './AppConfig'
// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1

const arrWhitelist = Config.IS_DEV ? ['startPage', 'token'] : ['startPage', 'token']

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['login', 'search', 'nav'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: arrWhitelist,
    transforms: [immutablePersistenceTransform],
  },
}

export default REDUX_PERSIST
