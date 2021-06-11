import React from 'react';

import UsuariosInDb from './UsuariosInDb';
import ContentRowMovies from './ContentRowMovies';
import PropiedadDestacada from './PropiedadDestacada';
import Chart from './Chart';
import ChartTwoLevels from './ChartTwoLevels';
import ChartRadar from './ChartRadar';





function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					
						
						

					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						<PropiedadDestacada />
						<UsuariosInDb />
						<Chart />
						<ChartRadar />
						<ChartTwoLevels />
						
						

						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;