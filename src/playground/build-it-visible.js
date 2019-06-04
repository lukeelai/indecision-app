let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    renderApplication();
};

const appRoot = document.getElementById('app');

const renderApplication = () => {
    const template = (
        <div>
            <h1>Generic Title</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'} 
            </button>
            {visibility && (
                <div>
                    <p>
                        details
                    </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApplication();
