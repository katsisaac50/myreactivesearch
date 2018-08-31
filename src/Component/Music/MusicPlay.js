import React, { Component } from 'react';
import { List, Icon, Button, Segment} from 'semantic-ui-react';


class MusicPlay extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        const { closePlayer } = this.props;
      return (
        
            <Segment textAlign='center'>
                <div style={{float: 'right'}}>
                    <Icon name='close' onClick={closePlayer} />
                </div>
                <audio controls style={{width: '50%'}} >
                    <source src="horse.ogg" type="audio/ogg"/>
                    <source src="horse.mp3" type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </Segment>
        
      );
    }
  }
  
  export default MusicPlay;