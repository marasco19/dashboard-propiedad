import React, {Component} from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
	{ name: 'Enero', value: 400 },
	{ name: 'Febrero', value: 300 },
	{ name: 'Marzo', value: 300 },
	{ name: 'Abril', value: 200 },
	{ name: 'Mayo', value: 278 },
	{ name: 'Junio', value: 189 },
  ];

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			propiedadesList:[]
		 }
	}
	
	render() { 
		return (  
			<React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<div className="col-lg-4 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambioFondo}>Ventas en el primer semestre</h6>
                        </div>
                        <div className="card-body colorFondo">
                            <div className="row">
							<PieChart width={300} height={300} align="center">
							<Pie
								dataKey="value"
								isAnimationActive={true}
								data={data01}
								cx="50%"
								cy="50%"
								outerRadius={80}
								fill="#8884d8"
								label
							/>
							
							<Tooltip />
							
						</PieChart>           
                            </div>
                        </div>
                    </div>
                </div>
					
					
        </React.Fragment>

		);
	}
}
export default Chart;