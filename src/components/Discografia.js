import React, { Component } from "react";

class discografia extends Component {
    render() {
        return (
            <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td>Álbum 1</td>
                <td>Faixa 1</td>
                <td>
                <button className="mini ui blue button">Editar</button>
                <button className="mini ui red button">Excluir</button>
                </td>
            </tr>
        )
    }
}

export default discografia;