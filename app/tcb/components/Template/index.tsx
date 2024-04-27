"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo";
import style from "./style.module.scss";
import { info } from "../../assets/data";
import moment from "moment";
import vcb from "../../assets/vcb.png";
import Total from "./../Template/total";

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

 const formatCurrency =(number:any)=> {
    number = number+"";
    return number.replace(/,/g, ".");
  }

  return (
    <section className="flex flex-col pt-5 pl-[33px] pr-[33px] pb-6 h-full h-[1110px] mx-auto  w-[794px]" >
      {header ? (<header>
        {/* Header top */}
        <div className="flex justify-between mb-1">
          <div className="w-[31.8%] flex justify-start h-fit">
            <div className="w-[220px]" >
              <img className="w-full ml-5" src={vcb.src} />
            </div>
          </div>
          <div className="w-1/3">

          </div>
         
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-[31.8%] flex justify-start h-fit">
            <div className="w-[220px]" >
              {/* <img className="w-full ml-5" src={vcb.src} /> */}
            </div>
          </div>
          <div className="w-1/3">

          </div>
          <div style={{ width: 170, alignContent: "center", fontSize: 18 }} className="text-right">
            <p className="font-bold text-xs mb-1">
              SAO KÊ TÀI KHOẢN
            </p>
            <p className="font-bold  text-xs">
              ACCOUNT STATEMENT
            </p>
          </div>
        </div>

        {/* Header mid */}
        <div className="mb-3" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <span style={{ display: "inline-block", width: 150 }}>Tên tài khoản/<i>Account name:</i></span>
            <span > TA QUANG BAC</span>
          </p>
          <p className="mt-[5px] w-[43%]">
            Ngày thực hiện/<i> Date:</i>
            <span className="ml-2">02/05/2024</span>
          </p>
        </div>
        <div className="mb-3" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <span style={{ display: "inline-block", width: 150 }}>Số tài khoản/<i>Account number:</i></span>
            <span > 0071000689735</span>
          </p>
          <p className="mt-[5px] w-[43%]">
            Chi nhánh thực hiện/<i> Branch:</i>
            <span className="ml-1">VCB BAC SAI GON-TRU SO C] </span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <span style={{ display: "inline-block", width: 160 }}>Loại tài khoản/<i>Type of Account:</i></span>
            <span > Tài khoản 1 chủ sở hữu/<i> Sole owner account</i></span>
          </p>
          <p className="mt-[5px] w-[43%]">
            Số lượng đồng chủ sở hữu tài
            <p>khoản<i>/ Number of Joint account
              <p>holder (nếu có):</p>
            </i>
            </p>
          </p>
        </div>
        <div className="mb-2" style={{ width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            Địa chỉ/<i>Address:</i>
            <span className="ml-1">11/1B HOANG BA, HUAN, KP6, TT. CU CHI, CU CHI, TP. HCM</span>
          </p>
        </div>

        <div className="mb-2" style={{ width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <p style={{ display: "inline-block", width: 160 }}>
              <p>CMND/CCCD/Hộ chiếu số: </p>
              <br />
              <i className="mt-1">ID/Citizen ID/PP No:</i>
            </p>
            <span>040086015322</span>
          </p>
        </div>

        <div className="mb-2" style={{ width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <span style={{ display: "inline-block", width: 160 }}> CIF:</span>
            <span >6109734</span>
          </p>
        </div>
        <div className="mb-2" style={{ width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <span style={{ display: "inline-block", width: 160 }}>Loại tiền/<i>Currency:</i></span>
            <span >VND</span>
          </p>
        </div>

        <div className="mb-2" style={{ width: "100%", display: "flex" }}>
          <p className="mt-[5px]" style={{ display: "inline-block", width: 160 }}>
            Từ/<i>From:</i>
            <span className="ml-5">01/11/2023 </span>
          </p>
          <p className="mt-[5px]" style={{ width: 150 }}>
            Đến/<i>To:</i>
            <span className="ml-5">25/04/2024</span>
          </p>
        </div>
        <div className="mb-4" style={{ width: "100%" }}>
          <p className="mt-[5px] w-[57%]">
            <b> Số dư đầu kỳ/<i>Opening balance:</i> </b>
            <span className="ml-[130px]">17.099.881</span>
          </p>
        </div>



      </header>):
      (
        <div >

        </div>
      )
      }
        
      {/* Table */}
      {/* <div ref={wrapperRef} className={`mt-1 ${hasLast ? "" : "h-[565px] overflow-x-hidden"}`}> */}
      <div ref={wrapperRef} style={!header?{marginTop:"30px",height:"940px"}:{height:"650px"}}>
        <table className={`w-full ${style.table}`}>
          <thead>
            <tr>
              <th className="w-[40px]">
                STT
                <br />
                <i>No</i>
              </th>
              <th style={{ width: "120px" }}>
                Ngày GD/
                <br />
                <i>TNX Date</i>
                <br />
                <i>Số CT/ Doc No</i>
              </th>
              <th style={{ width: "120px" }}>
                Số tiền ghi nợ/ <br />
                <i>Debit</i>
              </th>
              <th style={{ width: "120px" }}>
                Số tiền ghi có/ <br />
                <i>Credit</i>
              </th>
              <th style={{ width: "120px" }}>
                Số dư/  <br />
                <i>Balance</i>
              </th>
              <th  style={{ width: "180px" }}>
                Nội dung chi tiết/ <br />
                <i>Transactions in detail</i>
              </th>

            </tr>
          </thead>

          <tbody>
            {/* First Row */}
            {hasFirst && (
              <tr className={style.row_first}>
                <td colSpan={4}>
                  <b>Số dư đầu kỳ/</b>
                  <b>Open balance</b>
                </td>
                <td></td>
                <td></td>
                <td>
                  <b>{info.open_balance}</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {/* Data Rows */}
            {data.map((item, index) => {
              
              return (
                <tr key={index} style={!hasLast && index === data.length - 1 ? { borderBottomStyle: "solid" } : {}} className={!hasLast && index === data.length - 1 ? "last-row " : ""}>
                  <td  >
                    <div className="flex pl-[6px] pt-[2px]" style={{lineHeight:"13px",display:"inline-block", width: "100%" }}>
                      <span className="inline-block min-h-[16.5px]" />
                
                    {item.a}
                    </div>
                  </td>
                  <td  >
                    <div className="flex pl-[5px]  pt-[1px]">
                      <span className="inline-block min-h-[16.5px]" />
                      <b  >
                      {item.b.split('\n  ')[0]}
                      
                        <br />
                        {item.b.split('\n  ')[1]}
                      </b>

                    </div>
                    <br />

                  </td>
                  <td  >
                  <div className="flex  pt-[1px]" style={{lineHeight:"16px",display:"inline-block", width: "100%", textAlign: "end" }}>
                      <span className="inline-block min-h-[16.5px]" />
                      {item.c != "" && item.c != null && formatCurrency(item.c)}
                    </div>
                  </td>
                  <td  >
                  <div className="flex  pt-[1px]" style={{lineHeight:"16px",display:"inline-block", width: "100%", textAlign: "end" }}>
                      <span className="inline-block min-h-[16.5px]" />
                      {item.d != "" && item.d != null && formatCurrency(item.d)}
                    </div>
                  </td>
                  <td  >
                    <div className="flex  pt-[1px]" style={{lineHeight:"16px",display:"inline-block", width: "100%", textAlign: "end" }}>
                      <span className="inline-block min-h-[16.5px]" />
                      {item.e != "" && item.e != null && formatCurrency(item.e)}
                    </div>
                  </td>
                  <td  style={{ width: "242px"}} className="detail-cl">
                    <div  className="test-class pl-[4px]  pt-[1px]" style={{ textAlign: "left" , lineHeight:"16px",display:"inline-block",width:"217px",wordWrap:"break-word"}}>
                    <span className="inline-block min-h-[16.5px]" />
                      {item.f}
                    </div>
                  </td>
                </tr>
              );
            })}

            
          </tbody>
        </table>
      </div>

        {/* {
          footer &&  <Total/>

        } */}

<footer  className="mt-auto pt-2 text-[11px] text-center leading-[1.15] tracking-[-0.3px]">
       <div style={{ display: "flex", justifyContent: "space-between",lineHeight:"14px" }}>
       <div className="mb-[2px]" >
          <p style={{ textAlign: "left" }}>Postal address: </p>
          <p style={{ textAlign: "left" }}>198 TRAN QUANG KHAI AVENUE </p>
          <p style={{ textAlign: "left" }}>HANOI - S.R.VIETNAM</p>
        </div>
        <div style={{width:"240px"}}> 
          <p style={{ textAlign: "left" }}>Telex:  (0805) 411504 VCB - VT </p>
          <p style={{ textAlign: "left" }}>Swift:  BFTV VNVX </p>
          <p style={{ textAlign: "left" }}>Website:  www.vietcombank.com.vn</p>
          <p style={{ textAlign: "left" }}>Contact center: 1900.54.54.13</p>
        </div>
       </div>
       <div className="mt-1 mt-auto " style={{ width: "100%" }}>
        <p style={{ textAlign:"right"}}>Page {page} of {totalPage}</p>
      </div>
      </footer>

     
    </section>
  );
};

export default Template;
