import React, {Component} from 'react';

//class component
//tomo el {characterData} que me pasó App (hay que crear la constant), y se lo paso al child component TableBody (no hace falta que sea con el mismo nombre)

//simple component
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
};

//simple component
//arrow function, que recibe props como parámetro
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props; // acá le digo que las propiedades que llegen las cargue en la variable characterData

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;