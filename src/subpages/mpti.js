import React from 'react'
import { Segment } from 'semantic-ui-react'


export default function Page(props) {
    return(
        <Segment basic>
            {props.name}
        </Segment>    
    )
}

