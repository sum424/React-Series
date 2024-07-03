import Hello from './components/Hello'
import Fruits from './components/Fruits'

function App() {
  const person = {
    name: 'Suman', 
    message: 'Hello there', 
    emoji: '😒',
    seats: [1,2,3]
  }
  return (
    <div className="App">
      {/* <Hello name="kamal" message="this is a code" emoji="🥵" seats={seats} /> */}
      <Hello person={person} />
      <Fruits />
    </div>
  )
}

export default App
