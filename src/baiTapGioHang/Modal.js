import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
      const {gioHang, xoaGioHang, tangGiamSoLuong} = this.props;
        return (
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      <table className="table">
                          <tr>
                              <td>Mã SP</td>
                              <td>Hình ảnh</td>
                              <td>Tên SP</td>
                              <td>Số lượng</td>
                              <td>Đơn giá</td>
                              <td>Thành tiền</td>
                              <td></td>
                          </tr>
                          {gioHang.map((product, index) => {
                              return (
                                <tr key={index}>
                                    <td>{product.maSP}</td>
                                    <td>
                                        <img src={product.hinhAnh} width="50" height="50"></img>
                                    </td>
                                    <td>{product.tenSP}</td>
                                    <td>
                                    <button onClick={ () => tangGiamSoLuong(product.maSP,true)} className="btn btn-primary p-2 mr-1" style={{width:25}}>+</button>
                                      {product.soLuong}
                                    <button onClick={ () => tangGiamSoLuong(product.maSP,false)} className="btn btn-primary p-2 ml-1" style={{width:25}}>-</button>
                                    </td>
                                    <td>{product.donGia.toLocaleString()}</td>
                                    <td>{(product.soLuong*product.donGia).toLocaleString()}</td>
                                    <td><button onClick={ () => xoaGioHang(product.maSP)} className="btn btn-danger">Xóa</button></td>
                                </tr>
                              );
                          })}
                          <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>{
                              this.props.gioHang.reduce((tongTien,product,index) => {
                                return tongTien += product.soLuong * product.donGia
                              },0).toLocaleString()
                            }</td>
                          </tr>
                      </table>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
