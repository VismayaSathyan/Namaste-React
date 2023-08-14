 // const h1 = document.createElement('h1');
        // h1.innerHTML = "Hello World from JavaScript";
        // const root = document.getElementById('root');
        // root.appendChild(h1);

        const h1 = React.createElement('h1', {}, "sdsasfdsfsd");
        const h2 = React.createElement('h2', {}, "pkollkjnnnsjw");
        const div = React.createElement('div', {}, [h1, h2]);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        // const root = document.getElementById('root');
        root.render(div);