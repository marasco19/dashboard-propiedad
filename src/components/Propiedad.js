import React, {Component} from 'react';
import PropiedadList  from './PropiedadList';


class Propiedad extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			propiedadesList:[]
		 }
	}
	componentDidMount(){
        fetch('/api/propiedades')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(propiedades =>{
            this.setState({propiedadesList: propiedades.data})
        })
        .catch(error=>console.log(error))
    }
	render() { 
		return (  
			<React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the real state in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Tipo de operación</th>
                                            <th>Dirección</th>
											<th>Moneda</th>
                                            <th>Precio</th>
										</tr>
									</thead>
									<tfoot>
										
									</tfoot>
									<tbody>
									{this.state.propiedadesList.map((propiedad,index)=>{
                                        return  <PropiedadList  {...propiedad}  key={index} />
                                    })}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>

		);
	}
}
export default Propiedad;