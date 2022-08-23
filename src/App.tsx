import { Component } from "react";
import classes from "./App.module.scss";
import UserComponent from "./components/UserComponent";
import isEmptyArray from "./utils/isEmptyArray";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface Person {
  name: string;
  age: number;
  skills: string[];
}

interface isShowPerson {
  showPersons: boolean;
  Persons: Person[];
}

class App extends Component<Person, isShowPerson> {
  constructor(props: any) {
    super(props);
    this.state = {
      showPersons: true,
      Persons: [
        { name: "Mg Mg", age: 12, skills: ["a", "b"] },
        { name: "Ko Ko", age: 22, skills: ["c", "d"] },
        { name: "Ma Ma", age: 14, skills: ["e", "f"] },
      ],
    };
  }

  onClikIncreaseAge = (index: number) => {
    console.log("mim may gyi taw is clicked index " + index);
    console.log(this.state.Persons as []);

    const updatedPersonList = this.state.Persons;
    const updatedPersonObject = updatedPersonList[index];
    updatedPersonObject.age = updatedPersonObject.age + 1;
    console.log(updatedPersonObject);
    updatedPersonList[index] = updatedPersonObject;
    this.setState({ Persons: updatedPersonList });
  };

  showHideHandler = () => {
    this.setState((pervState: { showPersons: boolean }, prevProps) => {
      return { showPersons: !pervState.showPersons };
    });
    console.log(this.state.showPersons);
  };

  render() {
    const PersonsLists = isEmptyArray(this.state.Persons)
      ? []
      : this.state.Persons.map((item: any, index: number) => {
          return (
            <div key={index}>
              <UserComponent
                name={item.name}
                age={item.age}
                skills={item.skills}
                onClikIncreaseAge={() => this.onClikIncreaseAge(index)}
              />
              <br />
            </div>
          );
        });

    const Home = () => (
      <div className={classes.App}>
        <button onClick={this.showHideHandler}>Show Lists</button>
        <br />
        {this.state.showPersons ? PersonsLists : null}
      </div>
    );

    return (
      <Router>
        <div>
          <Nav />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
