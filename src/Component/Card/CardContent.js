import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class CardContent extends Component {
  render() {
      const { meta } = this.props;
    return (
        <div>
            <p>
                {'Description: '+meta.artists + " " + "★".repeat(meta.location)}
            </p>
            <p> {'Pub Year: '+meta.publishedYear} </p>
        </div>

    );
  }
}

export default CardContent;
