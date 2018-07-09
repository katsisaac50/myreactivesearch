import React, { Component } from 'react';
import Header from '../Component/Header';
import axios from 'axios';
import { withRouter } from 'react-router';

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
                <Header/>

                {album.id}
            </div>

        );
    }
}

export default withRouter(AlbumPreview);
