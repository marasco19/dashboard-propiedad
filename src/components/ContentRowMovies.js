import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Cantidad de propiedades",
    valor: 33,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total de usuarios",
    valor: 20,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Cantidad de barrios con publicaciones",
    valor: 5,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;