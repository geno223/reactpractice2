import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar'
import people from './people';


const App = () => {
  console.log(people)
  return (
    <Avatar
      name='david'
      src="https://pbs.twimg.com/profile_images/230946239/123_400x400.JPG"
      height={200}
      weight={200}
      d={true}
      a={[]}
    />
  );
}
export default App;