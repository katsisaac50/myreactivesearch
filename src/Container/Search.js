import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import { Grid, Breadcrumb, Container } from 'semantic-ui-react';
import '../App.css';

class Search extends Component {
  render() {
    return (

        <ReactiveBase
        //app="africanMusic"
        //credentials="M6dse7QG5:7b409605-7f19-4c7d-a8fc-7677dfeb7b47"
        app="bands"
        type="_doc"
        url="https://amp.a-magdy.me"
        >

          <div>
            <div >
                <div style={{ }}>
                <Grid style={{ position:'fixed', top:'0',backgroundColor: 'rgba(0,0,0, 0.9)'}}>
                    <Grid.Row>
                        <Grid.Column computer={9}>
                            <Container>
                                <CategorySearch
                                    componentId="searchbox"
                                    dataField={["titles", "artists"]}
                                    categoryField="titles.raw"
                                    placeholder="Search for music"
                                    style={{marginTop: "30px", paddingBottom: " 10px", paddingLeft:" 100px", color: 'Grey'}}
                                    innerClass={{ 
                                        title: 'text-title',
                                        input: 'text-input'
                                    }}
                                    className="CategorySearch"
                                />
                            </Container>
                        </Grid.Column>
                        <Grid.Column computer={7}>
                            <Container>
                                <Breadcrumb  style={{ marginTop: "40px", float: 'right', paddingRight:" 100px"}}>
                                    <Breadcrumb.Section style={{color: 'Grey'}}>Home</Breadcrumb.Section>
                                    <Breadcrumb.Divider style={{color: 'Grey'}} icon='right chevron' />
                                    <Breadcrumb.Section style={{color: 'Grey'}}>Album</Breadcrumb.Section>
                                </Breadcrumb>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>

                <RangeSlider
                    componentId="yearfilter"
                    dataField="publishedYear"
                    title="Year"
                    filterLabel="Year"
                    showHistogram={true}
                    range={{
                    start: 1945,
                    end: 2018
                    }}
                    rangeLabels={{
                    start: "1945",
                    end: "2018"
                    }}
                    interval={1}
                    react={{
                    and: ["searchbox"]
                    }}
                    style={{
                    padding: "5px",
                    "marginTop": "100px"
                    }}
                />
            </div>
            <ResultCard
              componentId="result"
              dataField="titles"
              title="Results"
              from={0}
              size={5}
              pagination={true}
              pages={9}
              react={{
                and: ["searchbox", "yearfilter"]
              }}
              onData={(res) => {
                console.log(res.publishedYear);
                return {
                  image: "https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png",
                  title: 'Song Title: '+res.titles,
                  description: (
                    <div>
                      <p>
                        {'Description: '+res.artists + " " + "★".repeat(res.location)}
                      </p>
                        <p>{'Pub Year: '+res.publishedYear}</p>
                    </div>
                ),
                  
                url: res.listing_url,
                containerProps: {
                  onMouseEnter: () => console.log('😁'),
                  onMouseLeave: () => console.log('🙀')
                }

                }
              }}
              style={{
                "textAlign": "center"
              }}
            />
          </div>
        </ReactiveBase>

    );
  }
}

export default Search;
