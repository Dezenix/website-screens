import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Suyog <mark>Kokaje</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "A Full Stack Developer",
            "A UI/UX Designer",
            "A Data Scientist",
          ]}
          speed={100}
          eraseDelay={900}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
