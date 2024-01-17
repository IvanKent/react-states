import './App.css'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBoxGrid from './ColorBoxGrid'
function App() {

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "magenta",
    "pink",
    "teal",
    "lime",
    "brown",
    "navy",
    "olive",
    "maroon",
    "indigo",
    "turquoise",
    "violet",
    "salmon",
    "khaki"
  ];


  return (
    <div>
      {/* <Counter/> */}
      {/* <Toggler/> */}
      <ColorBoxGrid colors={colors}/>
    </div>
  )
}

export default App
