"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo";
import style from "./style.module.scss";
import { info } from "../../assets/data";
import moment from "moment";
import logo from "../../assets/logo.png";
import Total from "./../Template/total";
import bg from "../../assets/sk2.jpg";

const Template = ({
  data,
  hasFirst,
  hasLast,
  footer,
  page,
  header,
  totalPage,
}: {
  data: any[];
  hasFirst?: boolean;
  hasLast?: boolean;
  footer?: boolean;
  page?: number;
  header?: boolean;
  totalPage?: number;
}) => {
  const wrapperRef = useRef<any>(null)

  const formatCurrency = (number: any) => {
    number = number + "";
    return number.replace(/,/g, ".");
  }

  const bodyStyle = {
    fontFamily: "Calibri",
    fontSize: "11px",
    letterSpacing: "0.01px"
  }

  return (
    <section
      style={bodyStyle}
      className="flex flex-col pt-[70px] pl-[30px] pr-[30px] pb-6 h-full h-[1188px] mx-auto  w-[860px]" >
      {header ? (<header>
        {/* Header top */}
        <div className="flex justify-between pt-[5px]">
          <div className="flex">
            <div className="mb-[4px]">
              <img className="w-[75px] h-[25px]" src={logo.src} />
            </div>
            <div className="pt-3 pl-2" style={{fontSize:"12px"}}>
              <b>
                <p> NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM   </p>
                <span> Bank for investment and Development of VietNam JSC</span>
              </b>
              <div className="mt-3 flex">
                <span className="mr-5"><b>Chi nhánh/Branch:</b></span>
                <span><b>Bình Thạnh</b></span>
              </div>
              <div className="flex justify-center mt-[8px]">
                <div className="w-[120px]" style={{ border: "1px solid" ,borderBottomStyle:"hidden"}}></div>
              </div>

            </div>
          </div>
          <div className="pt-2 mr-[40px]">
            <div className="mb-3 flex"><div className="w-[150px]">Mẫu số/Sample-No:</div> <span> CT001/KH</span></div>
            <div className="flex"><div className="w-[150px]">Ngày in/Prt Date:</div> <span>  22/05/2024 &nbsp;&nbsp;09:07:05</span></div>
          </div>
        </div>
        {/* <div style={{ border: "1px solid" }}></div> */}


        {/* Header mid */}

        <div>
          <div className="mt-5">
            <div className="pl-[210px]"><span className="mr-5">Số:</span> <span>/BC 03a</span></div>
            <div style={{ textAlign: "center" }} className="mb-[12px] mt-2">
              <b className="" style={{ fontSize: "15px" }}>
                SAO KÊ TÀI KHOẢN TIỀN GỬI KHÁCH HÀNG/ACCOUNT STATEMENT
              </b>
              <div className="mt-3">
                <div>
                  <span className="mr-4"><b >Từ ngày<span style={{ fontSize: "10px" }}>/</span></b>From Date:</span> <span className="mr-5"> 01/05/2024  </span>
                  <span className="mr-4"> <b>Đến ngày<span style={{ fontSize: "10px" }}>/</span></b>To date:</span> <span> 15/05/2024</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between pb-[5px]">
              <div>
                <div className="flex mb-3">
                  <div className="w-[190px] flex" >
                    <div className="w-[79px]">
                      <b>Khách hàng /</b>
                    </div>
                    <i> Customer : </i>
                  </div>
                  <b>HO DINH TUAN</b>
                </div>
                <div className="flex mb-3">
                  <div className="w-[190px] flex" >
                    <div className="w-[79px]">
                      <b>Mã KH /</b>
                    </div>
                    <i>Cif No: </i>
                  </div>
                  <b>1537536</b>
                </div>
                <div className="flex mb-3">
                  <div className="w-[190px] flex" >
                    <div className="w-[79px]">
                      <b>Tên tài khoản /</b>
                    </div>
                    <i> Account name:</i>
                  </div>
                  <span>HO DINH TUAN</span>
                </div>
                <div className="flex mb-3">
                  <div className="w-[190px] flex" >
                    <div className="w-[79px]">
                      <b>Số tài khoản  /</b>
                    </div>
                    <i> Account No:</i>
                  </div>
                  <b>1360095634</b>
                </div>
                <div className="flex" style={{fontSize:"10px"}}>
                  <div className="w-[190px] flex" >
                    <div className="w-[79px]">
                      <i>(Số tài khoản cũ / </i>
                    </div>
                    <i> Old Account No: </i>
                  </div>
                  <i>13610000095634)</i>
                </div>
              </div>
              <div>
                <div className="flex mb-[15px]" style={{alignItems:"center"}}>
                  <div className="flex w-[70px]" style={{ flexDirection: "column" }}>
                    <b className="mb-1">Địa chỉ/</b>
                    <i>Address:</i>
                  </div>
                  <div className="w-[210px]">TO 11 PHUONG 2 BAO LOC      /.LAM DONG</div>
                </div>
                <div className="flex" style={{ alignItems: "center" }}>
                  <div className="flex w-[70px]" style={{ flexDirection: "column" }}>
                    <b className="mb-1">Loại tiền tệ/</b>
                    <i>Currency:</i>
                  </div>
                  <div className="w-[210px]">VND</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </header>
      ) :
        (
          <div style={!header ? { marginTop: "0px" } : {}}>

          </div>
        )
      }

      {/* Table */}
      {/* <div ref={wrapperRef} className={`mt-1 ${hasLast ? "" : "h-[565px] overflow-x-hidden"}`}> */}
      <div ref={wrapperRef} style={!header ? { height: "940px" } : { height: "650px" }}>
        <table className={`w-full ${style.table}`}>
          {header && 
          <thead>
          <tr>
            <th className="w-[22px]">
              <div className="h-[35px] flex justify-between" style={{ flexDirection: "column" }}>
                <b>STT</b>
                <i>(No)</i>
              </div>
            </th>
            <th style={{ width: "54px" }}>
              <div className="h-[35px]   w-[54px]   flex justify-between" style={{ flexDirection: "column" }}>
                <div className="  w-[54px]"><b>Ngày giao dịch </b></div>
                <i>(Trans.Date)</i>
              </div>
            </th>
            <th style={{ width: "44px" }}>
              <div className="h-[35px]  w-[44px] flex justify-between" style={{ flexDirection: "column" }}>
                <div className=" w-[45px]"><b>Ngày hiệu lực</b></div>
                <i>(EFD.Date)</i>
              </div>
            </th>
            <th style={{ width: "55px" }}>
              <div className="h-[35px] w-[55px] flex justify-between" style={{ flexDirection: "column" }}>
                <div className="w-[55px]"><b>Mã giao dịch</b></div>
                <i>(Trans.Code)</i>
              </div>
            </th>
            <th style={{ width: "105px" }}>
              <div className="h-[35px] w-[105px] flex justify-between" style={{ flexDirection: "column" }}>
                <div className="w-[105px]"><b>Phát sinh nợ </b></div>
                <i>(Debit amount)</i>
              </div>
            </th>
            <th style={{ width: "105px" }}>
              <div className="h-[35px] w-[105px] flex justify-between" style={{ flexDirection: "column" }}>
                <div className="w-[105px]"><b>Phát sinh có </b></div>
                <i>(Credit amount)</i>
              </div>
            </th>
            <th style={{ width: "105px" }}>
              <div className="h-[35px] w-[105px] flex justify-between" style={{ flexDirection: "column" }}>
                <b>Số dư</b>
                <i>(Balance)</i>
              </div>
            </th>
            <th style={{ width: "60px" }}>
              <div className="h-[35px] w-[60px] flex justify-between" style={{ flexDirection: "column" }}>
                <b>Số chứng từ </b>
                <i>SEQ No.</i>
              </div>
            </th>
            <th style={{ width: "43px" }}>
              <div className="h-[35px] w-[43px] flex justify-between" style={{ flexDirection: "column" }}>
                <b>Mã GDV  </b>
                <i>Teller ID</i>
              </div>
            </th>
            <th style={{ width: "38px" }}>
              <div className="h-[35px] w-[38px] flex justify-between" style={{ flexDirection: "column" }}>
                <b>Mã CN  </b>
                <i>Branch</i>
              </div>
            </th>
            <th style={{ width: "180px" }}>
              <div className="h-[35px] flex justify-between" style={{ flexDirection: "column" }}>
                <b>Diễn giải </b>
                <i>(Txn. Description)</i>
              </div>
            </th>

          </tr>
        </thead>
          }

          <tbody>

            {/* First Row */}
            {header && (
              <tr className={style.row_first} style={{ height: "35px" }}>
                <td colSpan={6} style={{ textAlign: "left" }}>
                  <div className="flex justify-between" style={{ flexDirection: "column", height: "35px" }}>
                    <b>Số dư đầu kỳ/</b>
                    <i>(Opening balance)</i>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="flex justify-center" style={{ flexDirection: "column", height: "35px" }}>
                    <b>1.368.053,00</b>
                  </div>
                </td>
                <td colSpan={4}></td>
              </tr>
            )}
            {/* Data Rows */}
            {data.map((item, index) => {

              return (
                <tr key={index} style={!hasLast && index === data.length - 1 ? { borderBottomStyle: "solid" } : {}} className={!hasLast && index === data.length - 1 ? "last-row " : ""}>
                  <td className="w-[22px]"  style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.a}
                  </td>
                  <td  className="w-[54px]" style={{ textAlign: "left", verticalAlign: "middle" }} >

                    {item.b.split('\n  ')[0]}
                    <br />
                    {item.b.split('\n  ')[1]}

                  </td>
                  <td   className="w-[45px]" style={{ textAlign: "left", verticalAlign: "middle" }} >
                    <div className="w-[45px]" style={{wordBreak:"break-word"}}>
                    {item.c}
                    </div>
                  </td>
                  <td   className="w-[55px]" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.d}

                  </td>
                  <td   className="w-[105px]" style={{ textAlign: "right", verticalAlign: "middle" }}>
                    <div className="w-[105px]">{item.e}</div>

                  </td>
                  <td  className="w-[105px]" style={{ textAlign: "right", verticalAlign: "middle" }}>
                    <div className="w-[105px]">{item.f}</div>

                  </td>
                  <td  className="w-[105px]" style={{ textAlign: "right", verticalAlign: "middle" }}>
                    <div className="w-[105px]">{item.g}</div>
                  </td>
                  <td  className="w-[62px]" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {item.h}

                  </td>
                  <td  className="w-[41px]" style={{ textAlign: "left", verticalAlign: "middle" }}>
                    <div className="w-[41px]" style={{wordBreak:"break-word"}}>{item.i}</div>
                  </td>
                  <td  className="w-[41px]" style={{ textAlign: "center", verticalAlign: "middle" }} >
                    {item.j}
                  </td>

                  <td className="detail-cl w-[145px]">
                   <div className="w-[145px]" style={{wordBreak:"break-word"}}> {item.k}</div>
                  </td>
                </tr>
              );
            })}

            {footer && (
              <>
              <tr className={style.row_first} style={{ height: "35px" }}>
                <td colSpan={4} style={{ textAlign: "left" }}>
                  <div className="flex justify-between" style={{ flexDirection: "column", height: "35px" }}>
                    <b>Cộng phát sinh</b>
                    <i>(Total Amount)</i>
                  </div>
                </td>
                <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <b>15,387,000.00</b>
                </td>
                <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <b>27,340,640.00</b>
                </td>
                <td colSpan={5}></td>
              </tr>
              <tr className={style.row_first} style={{ height: "35px" }}>
                <td colSpan={6} style={{ textAlign: "left" }}>
                  <div className="flex justify-between" style={{ flexDirection: "column", height: "35px" }}>
                    <b>Số dư cuối kỳ</b>
                    <i>(Closing balance)</i>
                  </div>
                </td>
                <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <b>13,321,693.00</b>
                </td>
                <td colSpan={4}></td>
              </tr>
              </>
              
            )}


          </tbody>
        </table>
        {footer && <div className="mt-2"><b className="ml-[430px]">Người tạo:</b> <span className="ml-6">157736</span></div>}
      </div>

      {/* {
          footer &&  <Total/>

        } */}

      <footer className="mt-auto mb-[10px] text-[11px] text-center leading-[1.15] tracking-[-0.3px]">
        {footer && <div  className="flex w-[351px] ml-[351px]" style={{flexDirection:"column",fontSize:"13px"}}>
          <div style={{textAlign:"left"}}>Ký bởi: Ngân hàng Thương mại Cổ phần</div>
          <div style={{textAlign:"left"}}>Đầu tư và Phát triển Việt Nam - Chi nhánh</div>
          <div style={{textAlign:"left"}}>Bình Thạnh</div>
          <div style={{textAlign:"left"}}>Thời gian ký: 22/05/2024 &nbsp;&nbsp;09:07:05</div>
        </div>}
        <div style={{ display: "flex" }}>
          <span className="mr-[172px]"><i>Chứng từ này được in/chuyển đổi trực tiếp từ hệ thống In sao kê tài khoản khách hàng của BIDV.</i></span>
          <span> Trang/Page No {page} of {totalPage}</span>
        </div>
      </footer>


    </section>
  );
};

export default Template;
