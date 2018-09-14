import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {

    //en state, va lo que quiero que se modifique sin cargar en base de datos
    state = {
        //escribo array de items, como si fuese un JSON Array
        characters: []
    };

    //nuevo método (perteneciente a la App) para eliminar componentes del array
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {

        const { characters } = this.state;

        //paso data characters al child component Table, mediante la property characterData
        //lo mejor es tener un container Table creado en otro archivo, e ir creando los components
        //paso props al container Table
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }


}

export default App;