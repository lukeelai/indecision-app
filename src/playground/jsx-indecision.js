//Babel compiles and saves this app in /scripts/app.js
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//babel detects any changes and will update /scripts/app.js live

//To reinstall node_modules: yarn install --looks through package.json and installs dependencies

//Babel compiles our JSX to function calls
//React.createElement arguments
//1. is closing tags === p
//2. key object      === {id: "id-name"}
//3. text inbetween  === "This is JSX from app.js"

//JSX - Javascript XML - language extension

{
  /* 
JSX Arrays
{[99, 98, 97, 'Test']} == {99}{98}{97}{'Test'} 
*/
}

// start with const, rename to let if variable changes
// arrow functions are hoisted

//arguments and this keyword no longer bound with arrow functions

console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Subtitle",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApplication();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderApplication();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length) + 1;
  const option = app.options[randomNumber];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderApplication = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {/* prints app.subtitle if it exists */}
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApplication();
