import React from 'react';

function PropiedadList(props){
    return(
        <React.Fragment>
            
            <div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold text-gray-800">Propiedad Destacada</h5>
						</div>
						<div className="card-body">
                        <h2 className="m-0 font-weight-bold text-gray-800">{props.direccion + " "+ props.moneda+" "+props.precio}</h2>
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://localhost:3002/images/propiedades/"+props.fotos1} alt=" Propiedad Destacada "/>
							</div>
							<p>{props.descripciongral}</p>
							
						</div>
					</div>
				</div>
            </React.Fragment>    
    )
}
export default PropiedadList;

