import React, { Component } from 'react'
import Modal from './Modal'
import ProductsList from './ProductsList'
import data from '../data/data.json';


export default class BaiTapGioHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetail: data[0],
            gioHang: []
        };
    }

    xemChiTiet = (product) => {
        this.setState({
          productDetail: product,
        });
    };

    themGioHang = (product) => {
        let spGioHang = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        donGia: product.donGia,
        hinhAnh: product.hinhAnh,
        soLuong: 1}
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat[index].soLuong +=1;
        }else{
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    xoaGioHang = (maSP) => {
        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP);
        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP,tangGiam) => {
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if(tangGiam){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    
    render() {
        const {productDetail, gioHang} = this.state;
        let tongSoLuong = gioHang.reduce((tsl,product,index) => {
            return tsl += product.soLuong;
        },0);
        return (
            <div className="container mb-5">
                <Modal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="mt-3 text-right">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modelId" >Giỏ hàng ( {tongSoLuong} )</button>
                </div>
                <h3 className="text-center">Danh Sách Sản Phẩm</h3>
                <ProductsList xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang} data={data} />
                <div className="row">
                    <div className="col-7 text-center">
                      <h5>{productDetail.tenSP}</h5>
                      <img src={productDetail.hinhAnh} width="300"></img>
                    </div>
                    <div className="col-5">
                      <h5>Thông số kỹ thuật</h5>
                      <table className="table">
                        <tr>
                          <th>Màn hình</th>
                          <td>{productDetail.manHinh}</td>
                        </tr>
                        <tr>
                          <th>Camera trước</th>
                          <td>{productDetail.cameraTruoc}</td>
                        </tr>
                        <tr>
                          <th>Camera sau</th>
                          <td>{productDetail.cameraSau}</td>
                        </tr>
                        <tr>
                          <th>RAM</th>
                          <td>{productDetail.ram}</td>
                        </tr>
                        <tr>
                          <th>ROM</th>
                          <td>{productDetail.rom}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
            </div>
        )
    }
}
