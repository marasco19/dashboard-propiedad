import React, {Component} from 'react';
import PropiedadDestacadaDetail  from './PropiedadDestacadaDetail';



class PropiedadDestacada extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			propiedadesList:[]
		 }
	}
	componentDidMount(){
        fetch('/api/propiedades/destacada')
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
				{this.state.propiedadesList.map((propiedad,index)=>{
                    return  <PropiedadDestacadaDetail  {...propiedad}  key={index} />
                })}
				

        </React.Fragment>

		);
	}
}
export default PropiedadDestacada;