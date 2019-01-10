import './dev.scss';
import { ReactSwitchCase, ReactCase, ReactDefault } from './main';

/*===example start===*/

// install: npm install afeiship/react-switch-case --save
// import : import ReactSwitchCase from 'react-switch-case'

class App extends React.Component {
  state = {
    condition: 'component2'
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onClick1 = (e) => {
    const arr = ['component1', 'component2', 'component3', 'other'];
    const index = parseInt(Math.random() * 4);
    // console.log('index:->', index);
    this.setState({
      condition: arr[index]
    });
  };

  render() {
    return (
      <div className="hello-react-switch-case">
        <button className="button" onClick={this._onClick1}>
          Random
        </button>
        <ReactSwitchCase condition={this.state.condition}>
          <ReactCase value="component1">
            <h1>H1 Component</h1>
          </ReactCase>
          <ReactCase value="component2">
            <h2>H2 Component</h2>
          </ReactCase>
          <ReactDefault>
            Nothing!
            <strong>default state</strong>
          </ReactDefault>
        </ReactSwitchCase>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(<App />, document.getElementById('app'));