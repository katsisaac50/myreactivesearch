import React, { Component } from 'react';
import { Grid, Container, Header, Input, Button, Icon } from 'semantic-ui-react';


class AppFooter extends Component {
    render() {
      return (
        <Grid style={{ backgroundColor: 'rgba(0,0,0, 0.9)'}}>
            <Grid.Row>
                <Grid.Column computer={9} tablet={10} mobile={8} style={{padding: '20px 50px'}}>
                    <Container textAlign='left' >
                        <Header as='h3' style={{color: 'Grey'}}> Contact us </Header>
                    </Container>
                    <Container textAlign='left'>
                    <Input type='text' fluid placeholder='Your e-mail address' >
                        <input />
                        <Button type='submit'
                            color='orange'
                        >Contact
                        </Button>
                    </Input>
                    </Container>
                </Grid.Column>
                <Grid.Column computer={7} tablet={6} mobile={8} style={{padding: '30px 50px'}}>
                    <Container textAlign='left'>
                        <Header as='h3' style={{color: 'Grey'}}> Follow us on social media </Header>
                    </Container>
                    <Container textAlign='left'>
                        <Button 
                            circular
                            icon='facebook f'
                            color='facebook'
                        />
                        <Button 
                            circular
                            icon='twitter'
                            color='twitter'
                        />
                        <Button 
                            circular 
                            color='google plus' 
                            icon='google plus' 
                        />
                    </Container>
                </Grid.Column>
            </Grid.Row>    
        </Grid>
      );
    }
  }
  
  export default AppFooter;