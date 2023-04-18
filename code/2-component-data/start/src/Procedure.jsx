import React from "react";
import './Procedure.css';

function Procedure(props) {
    const procedureList = props.procedures.map((procedure, index) => {
        return(
            <li key={index} className={ procedure.prepared ? '' : 'prepared' }>
                {procedure.process}
            </li>
        );
    });

    return (
        <ul>
            { procedureList }
        </ul>
    );
}

export default Procedure;