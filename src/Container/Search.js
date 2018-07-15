import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, RangeSlider} from '@appbaseio/reactivesearch';
import { Grid, Container, Form, Checkbox, Label } from 'semantic-ui-react';
import Header from '../Component/Header';
import Card from '../Component/Card/Card';
import '../App.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            filter:'all'
        }
	}
changeRadioValue = (value) =>{ 
	this.setState({ filter: value })
}
  render() {
		const {filter}=this.state
		const dataField=filter=== 'all'? ["titles", "artists" ] :filter ;
		const checkboxKey=["all", "titles", "artists" ];
    return (

        <ReactiveBase
          app="bands"
          type="_doc"
          url="https://amp.a-magdy.me"
        >

          <div>
            	<div >

					<Grid style={{ position:'fixed', top:'0',backgroundColor: 'rgba(0,0,0, 0.8)'}}>
						<Grid.Row>
							<Grid.Column computer={9}>
								<Container>
									<CategorySearch
										componentId="searchbox"
										dataField={dataField}
										categoryField="titles.raw"
										placeholder="Search for music"
										style={{marginTop: "30px", paddingBottom: " 10px", paddingLeft:" 100px", color: 'Grey'}}
										innerClass={{ 
											title: 'text-title',
											input: 'text-input'
										}}
										className="CategorySearch"
									/>
									 <Form style={{ paddingLeft:" 100px" }}>
										<Form.Field>
											{
												checkboxKey.map((checkbox)=>
													<Checkbox
														key={checkboxKey.indexOf(checkbox)}
														radio
														style={{padding: '0 5px'}}
														label={checkbox}
														name='checkboxRadioGroup'
														value={checkbox}
														checked={filter === `${checkbox}` }
														onChange={()=>this.changeRadioValue(checkbox)}
													/>
												)
											}
										</Form.Field>
									</Form>
									
								</Container>
							</Grid.Column>
							<Grid.Column computer={7}>
								<Container>
									<Header/>
								</Container>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					
					<RangeSlider
						componentId="yearfilter"
						dataField="publishedYear"
						title="Year"
						filterLabel="Year"
						showHistogram={true}
						range={{ start: 1945, end: 2018}}
						rangeLabels={{ start: "1945", end: "2018" }}
						interval={1}
						react={{ and: ["searchbox"] }}
						style={{ padding: "5px",marginTop: "150px"}}
					/>
				</div>
				<Card/>
				
			</div>
        </ReactiveBase>

    );
  }
}

export default Search;
