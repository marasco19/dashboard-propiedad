import React, {Component} from 'react';
import { PieChart, Pie } from 'recharts';

const data01 = [
	{ name: 'Vendedor 1', value: 400 },
	{ name: 'Vendedor 2', value: 300 },
	{ name: 'Vendedor 3', value: 300 },
	{ name: 'Vendedor 4', value: 200 },
  ];
  const data02 = [
	{ name: 'A1', value: 100 },
	{ name: 'A2', value: 300 },
	{ name: 'B1', value: 100 },
	{ name: 'B2', value: 80 },
	{ name: 'B3', value: 40 },
	{ name: 'B4', value: 30 },
	{ name: 'B5', value: 50 },
	{ name: 'C1', value: 100 },
	{ name: 'C2', value: 200 },
	{ name: 'D1', value: 150 },
	{ name: 'D2', value: 50 },
  ];

class ChartTwoLevels extends Component {
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
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambioFondo}>TOP Vendedores</h6>
                        </div>
                        <div className="card-body colorFondo">
                            <div className="row">
							<PieChart width={300} height={300}>
          						<Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          						<Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        					</PieChart>           
                            </div>
                        </div>
                    </div>
                </div>
					
					
        </React.Fragment>

		);
	}
}
export default ChartTwoLevels;