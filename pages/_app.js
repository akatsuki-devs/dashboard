import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../styles/icons.css'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp


// INICIAR O PROJETO - npm run dev 
// npm install firebase