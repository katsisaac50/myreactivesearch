import React from 'react';
import Footer from '../Component/Footer';
import { Grid, Container, Header, Input, Button, Icon } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

const album={"id":"SH01","keywords":["Musik","Schellack","Ghana","Fante, Fanti","Highlife","Danceband-Highlife"],"location":"S.l.","titles":["Ahia me.[...] penny","Woma me mdzi ma agoro","Ambassador Yellow Label"],"artists":["Kakaikus Band","Amissah, I.K."],"publishedYear":"1955"}

const FooterStory= storiesOf('General Component', module)
.add('app footer', () => <Footer {...this.props}/>);


  export default FooterStory;
