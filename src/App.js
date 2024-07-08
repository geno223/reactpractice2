import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar'
import people from './people';


const App = () => {
  console.log(people)
  return (
    people.map(v => <Avatar a={v.img} b={v.firstName} c={v.width} d={v.height}/>)
  );
}
export default App;