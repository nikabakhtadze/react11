import React from 'react';
import ReactDOM from 'react-dom/client';
import Listitems from './Listitems';
class App extends React.Component {
    render() {
        let fruites=["apple","orange","grapes","kiwi"];
        return (
            <React.Fragment>
                <Listitems masivi={fruites} />
            </React.Fragment>
        );
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
