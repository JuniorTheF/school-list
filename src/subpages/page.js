import React from 'react'
import { Segment, Card } from 'semantic-ui-react'


export default function Page(props) {
    return(
        <Segment basic>
            <Card>
                <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.years}</span>
                </Card.Meta>
                <Card.Description>
                    {props.dir}
                </Card.Description>
                </Card.Content>
            </Card>
            
        </Segment>    
    )
}

