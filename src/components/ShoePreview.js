import React from 'react';

class ShoePreview extends React.Component {
  render() {
    console.log(this.props.shoeImg);


    return (
      <div>
        <img width="100" height="50" src={this.props.shoeImg} />
        <h4>{this.props.shoeName}</h4>
      </div>
    );
  }
}

export default ShoePreview;