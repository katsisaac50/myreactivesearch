import React, { Component } from 'react';
import AppHeader from '../Component/Header';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Grid, Header, Container, Image} from 'semantic-ui-react';

class AlbumPreview extends Component {

    constructor(props){
        super(props);
        this.state={
            album:{},
        }
    }
    componentWillMount(){
        const id= this.props.match.params.id;
        axios.get('https://raw.githubusercontent.com/HackYourFuture-CPH/class04-final-project/master/database-24fdbd.json')
            .then((res) => {
                const albums = res.data;
                const album = albums.filter((album)=>album.id===id)[0]

                this.setState({ album })
                
            }).catch(function (error) {
                console.log(error);
            })     
    }

    render() {
        const { album } = this.state;
        console.log(album)

        return (
            <div>
                <AppHeader />
                <Grid style={{ position: 'relative', top: '50px'}}>
                    <Grid.Row>
                        <Grid.Column computer={5} tablet={5} mobile={16}>
                            <Container>
                                <Header as="h3"> {album.artists} </Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column computer={6} tablet={6} mobile={16}>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={5} mobile={16}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>

        );
    }
}

export default withRouter(AlbumPreview);
