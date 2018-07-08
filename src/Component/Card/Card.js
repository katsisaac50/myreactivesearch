import React, { Component } from 'react';
import {  ResultCard } from '@appbaseio/reactivesearch';
import CardContent from './CardContent';
import 'semantic-ui-css/semantic.min.css';


class Card extends Component {
    constructor(props){
        super(props);
        this.state ={
            play: false
        }
    }
    //<td><Link to={'/course/'+course.id}>{course.title} </Link> </td>
    OpenDetail =(data, id) =>{
        window.location.href=`/AlbumList/${id}`;
    }

    render() {
        const { play } = this.state;
        return (
                
                <ResultCard
                    componentId="result"
                    dataField="titles"
                    title="Results"
                    from={0}
                    size={8}
                    pagination={true}
                    pages={9}
                    react={{ and: ["searchbox", "yearfilter"] }}
                    onData={(res) => {
                        return {
                            image: "https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png",
                            icon: 'cross',
                            title: 'Song Title: '+res.titles,
                            description: (
                                <CardContent
                                    meta={res}                            
                                />
                            ),
                            url: res.listing_url,
                            containerProps: {
                                onMouseEnter: () => this.setState({play: true}),
                                onMouseLeave: () => this.setState({play: false}),
                                onClick: ()=>this.OpenDetail(res , res.id)
                        }}
                    }}
                    style={{ "textAlign": "center"}}
                />
        );
    }
}

export default Card;
