import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class ChartRadar extends PureComponent {
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
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambioFondo}>Ventas en Barrios</h6>
                        </div>
                        <div className="card-body colorFondo">
                            <div className="row">
							<PieChart width={300} height={300}>
								<Pie
									data={data}
									cx="50%"
									cy="50%"
									labelLine={true}
									label={renderCustomizedLabel}
									outerRadius={80}
									fill="#8884d8"
									dataKey="value"
								>
									{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
									))}
								</Pie>
								</PieChart>
                            </div>
                        </div>
                    </div>
                </div>
					
					
        </React.Fragment>

		);
	}
}
export default ChartRadar;