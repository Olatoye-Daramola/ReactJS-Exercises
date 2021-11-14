import Laptop from './views/Laptop'
import RegistrationPage from './views/RegistrationPage'
import LoginPage from './views/LoginPage'
import './App.css'
import HomePage from "./views/HomePage";

function App() {

    return (
        <div className="container">
            {/*<Laptop name='Lenovo' color='gold' madeIn='China' buttonColor='blue'/>*/}
            {/*<Laptop name='Apple' color='black' madeIn='US' buttonColor='green'/>*/}
            <RegistrationPage/>
            <LoginPage/>
            <HomePage/>
        </div>
    )
}

export default App