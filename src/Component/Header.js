import React, { Component } from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
      return (
        <Breadcrumb  style={{ marginTop: "40px", float: 'right', paddingRight:" 100px"}}>
            <Breadcrumb.Section style={{color: 'Grey'}}>
                <Link to={'/'}>Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider style={{color: 'Grey'}} icon='right chevron' />
            <Breadcrumb.Section style={{color: 'Grey'}}>Album</Breadcrumb.Section>
        </Breadcrumb>
      );
    }
  }
  
  export default Header;