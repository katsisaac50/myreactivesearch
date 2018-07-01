import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, SingleRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
        <ReactiveBase
        app="africanMusic"
        credentials="M6dse7QG5:7b409605-7f19-4c7d-a8fc-7677dfeb7b47">
          <div>
            <div >
              <CategorySearch
                componentId="searchbox"
                dataField="titles"
                categoryField="titles.raw"
                placeholder="Search for music"
                style={{
                  padding: "5px",
                  "marginTop": "100px"
                }}
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
              size={6}
              pagination={true}
              react={{
                and: ["searchbox", "yearfilter"]
              }}
              onData={(res) => {
                return {
                  image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
                  title: res.titles,
                  description: res.artists + " " + "★".repeat(res.location)
                }
              }}
              style={{
                "width": "60%",
                "textAlign": "center"
              }}
            />
          </div>
        </ReactiveBase>
    );
  }
}

export default App;
