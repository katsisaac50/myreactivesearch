import React from 'react';
import MusicList from '../Component/Music/MusicList';
import { List, Icon, Button} from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

const album={"id":"SH01","keywords":["Musik","Schellack","Ghana","Fante, Fanti","Highlife","Danceband-Highlife"],"location":"S.l.","titles":["Ahia me.[...] penny","Woma me mdzi ma agoro","Ambassador Yellow Label"],"artists":["Kakaikus Band","Amissah, I.K."],"publishedYear":"1955"}

const MusicStory = storiesOf('Album', module)
.add('musiclist', () => <MusicList album={album} music={album.titles} {...this.props}/>);


  export default MusicStory;
