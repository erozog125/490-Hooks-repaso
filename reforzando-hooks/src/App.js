import { Routes,Route } from 'react-router-dom';
import { ChangeStyle } from './components/ChangeStyle/ChangeStyle';
import { ChangeText } from './components/ChangeText/ChangeText';
import { Clock } from './components/Clock/Clock';
import { ListNames } from './components/ListNames/ListNames';
import { Navigator } from './components/Navigator/Navigator';
import { Tweet } from './components/Tweet/Tweet';

function App() {
  return (
    <div className="App">
      <Navigator />      
      <Routes>
        <Route path="/changeText" element={<ChangeText />}/>
        <Route path="/changeStyle" element={<ChangeStyle class1 ="class1" class2="class2" />}/>
        <Route path="/listNames" element={<ListNames />}/>
        <Route path="/tweet" element={<Tweet />}/>
        <Route path="/" element={<Clock />}/>
      </Routes>      
    </div>
  );
}

export default App;
