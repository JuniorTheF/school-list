import React, {useState} from 'react'
import { Segment, Card, Image, Modal } from 'semantic-ui-react'


export default function Page(props) {
    const [open, setOpen] = useState(false)
    return(
        <Segment basic>
            <Card><Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Image src={props.src} wrapped ui={false}/>}
    >
      <Modal.Header>Место на карте</Modal.Header>
      <Modal.Content image>
      <Image src={props.src} fluid wrapped />
      </Modal.Content>
    </Modal>        
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

