import React, { Component } from "react";

class MyForm extends Component {
    render() {
        return(
            <form className="ui form">
                <div className="fields">
                <div className="four wide field">
                <label>Album</label>
                <input type="text" name="album" placeholder="Álbum"/>
                </div>

                <div className="four wide field">
                <label>Faixa</label>
                <input type="text" name="faixa" placeholder="Faixa"/>
                </div>

                <div className="four wide field">
                <button className="ui primary button submit-button">Salvar</button>
                </div>

                </div>
            </form>
        )
    }
}

export default MyForm;