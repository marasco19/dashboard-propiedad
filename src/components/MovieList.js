import React from 'react';

function MovieList(props){
    return(
        <React.Fragment>
            <tr>
                <th>{props.id}</th>
                <th>{props.title}</th>
                <th>{props.rating}</th>
                <th>{props.awards}</th>
                <th>{props.length}</th>
			</tr>
            </React.Fragment>    
    )
}
export default MovieList;

