import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Router } from './routes/Router'
import { GlobalStyles } from './styles/globalStyles'
import { AuthProvider } from './Auth/AuthProvider'

const App = () => (
  <AuthProvider>
    <GlobalStyles />
    <Router />
  </AuthProvider>
)

export default App
