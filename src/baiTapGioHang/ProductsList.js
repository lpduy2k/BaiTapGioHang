import React, { Component } from 'react'
import Product from './Product'

export default class ProductsList extends Component {
      renderProductListHandler = () => {
          return this.props.data.map((product, index) => {
            return <Product xemChiTiet={this.props.xemChiTiet} themGioHang={this.props.themGioHang} prod={product} key={index} />
          });
      };
      render() {
          return (
              <div className="container">
                  <div className="row my-5">
                    {this.renderProductListHandler()}
                  </div>
              </div>
          )
      }
}


