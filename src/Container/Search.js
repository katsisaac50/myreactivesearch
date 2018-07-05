import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import { Grid } from 'semantic-ui-react';
import '../App.css';

class Search extends Component {
  render() {
    return (
        <Grid>
        <ReactiveBase
        //app="africanMusic"
        //credentials="M6dse7QG5:7b409605-7f19-4c7d-a8fc-7677dfeb7b47"
        app="bands"
        type="_doc"
        url="https://amp.a-magdy.me"
        >

          <div>
            <div >
              <CategorySearch
                componentId="searchbox"
                dataField={["titles", "artists"]}
                categoryField="titles.raw"
                placeholder="Search for music"
                style={{
                  padding: "5px",
                  "marginTop": "100px"
                }}
                innerClass={{
                  title: 'text-title',
                  input: 'text-input'
              }}
              className="CategorySearch"
              />
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
                  "marginTop": "10px"
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
        </Grid>
    );
  }
}

export default Search;
