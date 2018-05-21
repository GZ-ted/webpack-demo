
import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import style from './style.scss';
import printMe from './print.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

class App extends React.Component {

	render() {
		
		return <div>Hello, webpack => react!!! pwa</div>;

	}
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');

        // printMe();

        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}