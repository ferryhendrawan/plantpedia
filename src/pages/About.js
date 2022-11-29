import logo from "./pngtree-natural-flower-logo-image_79362-transformed.png";
import "./About.css";

export default function About() {

    return (
        <div className='About'>
            <div className="App-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="descMain">
                <p id="descAbout">
                Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. There are over 300,000 species of plants; common examples of plants include grasses, trees, and shrubs. Plants have an important role in the world’s ecosystems. They produce most of the world’s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants. The study of plants is called botany.
                </p>
            </div>
        </div>
    )
  }