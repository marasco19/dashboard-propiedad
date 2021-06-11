import React from 'react';

function PropiedadList(props){
    return(
        <React.Fragment>
            <tr>
                <th>{props.id}</th>
                <th>{props.titulo}</th>
                <th>{props.tipoopercion}</th>
                <th>{props.direccion}</th>
                <th>{props.moneda}</th>
                <th>{props.precio}</th>
			</tr>
            </React.Fragment>    
    )
}
export default PropiedadList;

