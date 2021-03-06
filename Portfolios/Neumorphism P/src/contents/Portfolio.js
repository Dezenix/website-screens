import { Component } from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="#">
              <img
                src={project1}
                className="po1"
                alt="AlgoSort Sorting Visualiser"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="#">
              <img
                src={project2}
                className="po1"
                alt="Shoes Nike Landing page"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="#">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
            <a href="#">
              <img src={project4} className="po1" alt="Tribute to MSD"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
