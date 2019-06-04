'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderApplication();
};

var appRoot = document.getElementById('app');

var renderApplication = function renderApplication() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Generic Title'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'details'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApplication();
