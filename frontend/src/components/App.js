import React from "react";
import { Widget } from 'rasa-webchat';

class App extends React.Component{
    render(){
        return <Widget
        initPayload={"/get_started"}
        socketUrl={"http://localhost:5005"}
        socketPath={"/socket.io/"}
        customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"rasa Demo"}
        />
    }
}

export default App;