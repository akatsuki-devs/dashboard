import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../styles/icons.css'
import { store } from '../redux/store'
// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LogoutProvider } from '../components/logout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <LogoutProvider onLogout={() => {
        // Lógica de logout aqui (ex: limpar token, etc.)
        localStorage.removeItem('token');
        
        // Redirecionar para a página de login
        router.push('/');
      }}>
        <Component {...pageProps} />
      </LogoutProvider>
    </Provider>
  );
}

export default MyApp;
