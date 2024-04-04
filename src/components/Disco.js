import React, { Component } from "react";
import Discografia from "./Discografia";

class Disco extends Component {
    render() {
        return(
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{ width: "50px", textAlign: "center"}}>#</th>
                            <th>Álbum</th>
                            <th>Faixa</th>
                            <th style={{ width: "148px"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Discografia />
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Disco;