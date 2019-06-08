// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderApplication();
// };

// const appRoot = document.getElementById("app");

// const renderApplication = () => {
//   const template = (
//     <div>
//       <h1>Generic Title</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>details</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderApplication();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Generic Title</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
