import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {prod, xemChiTiet, themGioHang} = this.props;
        return (
          <div className="col-12 col-lg-4 mb-3">
            <div className="card">
              <img className="card-img-top" style={{height:350}} src={prod.hinhAnh} alt />
              <div className="card-body">
                <h4 className="card-title">{prod.tenSP}</h4>
                <button className="btn btn-success" onClick={() => xemChiTiet(prod)}>Xem chi tiết</button>
                <button className="btn btn-danger ml-2" onClick={() => themGioHang(prod)}>Thêm giỏ hàng</button>
              </div>
            </div>
          </div>
        )
    }
}
