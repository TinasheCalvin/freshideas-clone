import './app.scss';
import Main from './components/main/Main';
import Customers from './components/customers/Customers';
import Pricing from './components/pricing/Pricing'
import Team from './components/team/Team'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Main />
      <Customers />
      <Pricing />
      <Team />
      <Footer />
    </>
  );
}

export default App;
