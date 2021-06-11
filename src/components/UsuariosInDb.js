import React, {Component} from 'react';
import Usuario  from './Usuario';


class UsuariosInDb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuariosList:[]
         }
    }
    componentDidMount(){
        fetch('/api/usuarios')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(usuarios =>{
            this.setState({usuariosList: usuarios.data})
        })
        .catch(error=>console.log(error))
    }
    cambioFondo(){
        let fondo = document.querySelector(".colorFondo");
        fondo.classList.toggle('bg-secondary');
    }
    render() { 
        return ( 
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambioFondo}>Usuarios registrados</h6>
                        </div>
                        <div className="card-body colorFondo">
                            <div className="row">
                                    {this.state.usuariosList.map((usuario,index)=>{
                                        return  <Usuario  {...usuario}  key={index} />
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
         );
    }
}

export default UsuariosInDb;