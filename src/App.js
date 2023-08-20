

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import data from './data';

function App() {

  const hero = data.map(item => {
    return(
      <Hero 

        key = {item.id}
        {...item}
      />
    )
  })


  return (
    <div>
      <NavBar />
      {hero}
    </div>
  );
}

export default App;
