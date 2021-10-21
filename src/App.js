import { Mobile } from "./components/Mobile.js";

function App() {
  return (
    <div id="maindiv">
      <Mobile
        brands={["Android", "BlackBerry", "Iphone", "Windows Phone"]}
        name="Mobile Operating System"
      />
      <Mobile
        brands={["Samsung", "HTC", "Micromax", "Apple"]}
        name="Mobile Manufacturers"
      />
    </div>
  );
}

export default App;
