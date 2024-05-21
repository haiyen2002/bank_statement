"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo";
import style from "./style.module.scss";
import { info } from "../../assets/data";
import moment from "moment";
import agr from "../../assets/lg1.png";
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

  return (
    <section

      className="flex flex-col pt-9 pl-[33px] pr-[33px] pb-6 h-full h-[1122px] mx-auto  w-[794px]" >
      <header>
        {/* Header top */}
        <div className="flex justify-between pt-[5px]" style={{fontSize:"13px"}}>
          <div className="flex" style={{ flexDirection: "column" }}>
            <div className="mb-[4px]">
              <b>Chi nhánh:</b>
              <b className="ml-[27px]">{info.branch}</b>
            </div>
            <div className="mb-[4px]">
              <span>Địa chỉ:</span>
              <span className="ml-[48px]">{info.branchAddress}</span>
            </div>
            <div className="">
              <span>Điện thoại/Fax:</span>
              <span className="ml-[9px]">{info.fax}</span>
            </div>
          </div>
          <div className="">
            <img className="h-[50px] w-[190px]" src={agr.src} />
          </div>
        </div>
        <div className="mt-[2px]" style={{ border: "1px solid", borderBottomStyle: "hidden" }}></div>


        {/* Header mid */}

        <div>
          <div className="ttttte" style={header ? { marginTop: "10px" } : { marginTop: "3px" }}>
            {header ? (<div style={{ fontSize: "19px", textAlign: "center" }} className="mb-[12px]">
              <b className="">
                SỔ PHỤ / STATEMENT
              </b>
            </div>) : (<div></div>)}

            {header ? (
              <div className="flex justify-between" style={{fontSize:"13px"}}>
                <div className="w-[55%]">
                  <div className="mb-2">
                    <b>Tên khách hàng</b><span style={{fontSize:"11px"}}>/ Customer name : </span> <span className="ml-[5px]">{info.customerName}</span>
                  </div>
                  <div className="mb-2">
                    <b>Địa chỉ</b><span style={{fontSize:"11px"}}> / Address : </span> <span className="ml-[5px]">{info.address}</span>
                  </div >
                  <div className="mb-2">
                    <b>Ngày in</b><span style={{fontSize:"11px"}}> / Print out date &nbsp;&nbsp;: </span> <span className="ml-[6px]">{info.printed_date}</span>
                  </div>
                  <div className="mb-2">
                    <b>Loại tiền gửi</b><span style={{fontSize:"11px"}}> / DP kind : </span> <span className="ml-[5px]"> {info.type_of_account}</span>
                  </div>
                  <div className="mb-2">
                    <b>Số tài khoản</b><span style={{fontSize:"11px"}}> / A/C No &nbsp;: </span> <span className="ml-[5px]"> {info.account_no}</span>
                  </div>
                  <div className="mb-2 flex justify-between pr-1">
                    <div><b>Ngày phát sinh trước</b><span style={{fontSize:"11px"}}> / Prior Statement : </span> <span className="pl-[5px]"> {info.from_date} </span></div> <div className=""> <span className="">{info.priorBlance}</span></div>
                  </div>
                  <div className="mb-2 flex justify-between pr-1">
                    <div><b>Số dư cuối ngày</b><span className="mr-[28px]" style={{fontSize:"11px"}}> / Ending balance  </span> <span><span style={{fontSize:"11px"}} className="ml-[2px]">: &nbsp;&nbsp;</span>{info.to_date}</span></div> <span>{info.endingBalance}</span>
                  </div>
                  <div className="mb-2 flex justify-between pr-1">
                    <div><b>Số bút toán/Doanh số nợ</b><span className="mr-[5px]" style={{fontSize:"11px"}}> / Less debit  </span> <span style={{fontSize:"11px"}} className="mr-[38px]"> :</span> <span > {info.numberOut}</span></div> <span>{info.lessDebit}</span>
                  </div>
                  <div className="mb-2 flex justify-between pr-1">
                    <div><b>Số bút toán/Doanh số có</b><span className="mr-[5px]" style={{fontSize:"11px"}}> / Plus credit </span> <span style={{fontSize:"11px"}} className="mr-[38px]">:</span> <span>{info.numberIn}</span></div> <span>{info.plusDebit}</span>
                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="mb-2 mt-[42.5px]">
                    <b>Loại tiền</b><span style={{fontSize:"11px"}}> / Ccy : </span> <span className="ml-2"> VND</span>
                  </div>
                  <div className="mb-2">
                    <b>Tài khoản đồng sở hữu</b><span style={{fontSize:"11px"}}> / Join A/C : </span> <span className="ml-2"> No</span>
                  </div>
                  <div className="mb-2">
                    <b>Tình trạng tài khoản</b><span style={{fontSize:"11px"}}> / A/C status </span><span className="ml-[5px]" style={{fontSize:"11px"}}>:</span> <span className="ml-2"> Active</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <div><b>Doanh số nợ tháng</b><span style={{fontSize:"11px"}}> / Monthly less debit : </span></div> <span>{info.monthLessDebit}</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <div> <b className="">Doanh số có tháng</b><span style={{fontSize:"11px"}}> / Monthly plus credit: </span></div> <span> {info.monthlyPlusDebit}</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <div><b>Doanh số nợ năm</b><span style={{fontSize:"11px"}}> / Annual less debit </span> <span className="ml-[13px]" style={{fontSize:"11px"}}>:</span></div> <span> {info.annualyLessDebit}</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <div><b>Doanh số có năm</b><span style={{fontSize:"11px"}}> / Annual plus credit </span> <span className="ml-[11px]" style={{fontSize:"11px"}}>:</span></div> <span> {info.annualyPlusDebit}</span>
                  </div>
                </div>
              </div>) :
              (<div></div>)
            }
          </div>
        </div>
      </header>

      {/* Table */}
      {/* <div ref={wrapperRef} className={`mt-1 ${hasLast ? "" : "h-[565px] overflow-x-hidden"}`}> */}
      <div ref={wrapperRef} style={!header ? { height: "940px" } : { height: "650px" }}>
        <table className={`w-full ${style.table}`}>
          <thead style={{ backgroundColor: "#ded7d780" }}>
            <tr>
              <th className="w-[60px]">
                <b>Ngày</b>
                <br />
                <span> Date</span>
              </th>
              <th style={{ width: "177px" }}>
               <b> Ghi chú</b> <br />
                <span>Remark</span>
              </th>
              <th style={{ width: "110px" }}>
                <b>Nợ</b> <br />
                <span>Dr</span>
              </th>
              <th style={{ width: "110px" }}>
                <b>Có</b>  <br />
                <span>Cr</span>
              </th>
              <th style={{ width: "140px" }}>
                <b>Số dư</b>  <br />
                <span>Balance</span>
              </th>
              <th style={{ width: "175px" }}>
                <b>Số tham chiếu</b> <br />
                <span>Ref. no</span>
              </th>

            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {

              return (
                <tr key={index} style={!hasLast && index === data.length - 1 ? { borderBottomStyle: "solid" } : {}} className={!hasLast && index === data.length - 1 ? "last-row " : ""}>
                  <td className="w-[60px] text-center" style={{ verticalAlign: "top" }}>
                    <div className="w-[60px]" >
                      {item.a}
                    </div>
                    <br />

                  </td>
                  <td className="w-[177px] text-left" style={{ verticalAlign: "top" }}>
                    <div className="flex w-[177px]" style={{ textAlign: "left",display: "inline-block", wordWrap: "break-word" }}>
                      {item.b}
                    </div>
                  </td>
                  <td style={{ verticalAlign: "top", textAlign: "right" }}>
                    <div className="flex" style={{display: "inline-block", width: "100%", textAlign: "end" }}>
                      {item.c}
                    </div>
                  </td>
                  <td style={{ verticalAlign: "top", textAlign: "right" }}>
                    <div className="flex" style={{  display: "inline-block", width: "100%", textAlign: "end" }}>
                      {item.d}
                    </div>
                  </td>
                  <td style={{ verticalAlign: "top", textAlign: "right" }}>
                    <div className="flex" style={{ display: "inline-block", width: "100%", textAlign: "end" }}>
                      {item.e}
                    </div>
                  </td>
                  <td style={{ width: "175px", verticalAlign: "top" }} className="detail-cl text-left">
                    <div style={{ display: "inline-block", width: "100%" }} >
                      {item.f}
                    </div>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
      <footer className="mt-auto ">
        <div style={{ border: "1px solid", borderBottomStyle: "hidden" }}></div>
        <div className="flex justify-between mt-2">
          <span>Website: www.agribank.com.vn</span>
          <span className="ml-[140px]">{page}/{totalPage}</span>
          <span>Người in: CULNLONG Thời gian in: 22/05/2024 09:45:23</span>

        </div>

      </footer>


    </section>
  );
};

export default Template;
