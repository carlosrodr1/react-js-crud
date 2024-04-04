import React, { Component } from "react";
import MyForm from "./MyForm";
import Disco from "./Disco";
import "./app.css";

class App extends Component {
    render() {
        return(
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                        Gerenciar a
discografia da dupla caipira Tião Carreiro e Pardinho
                        </a>
                    </div>
                </div>

                <div className="ui main container">
                <MyForm />
                
                <Disco />
                </div>
            </div>
        )
    }
}

export default App;