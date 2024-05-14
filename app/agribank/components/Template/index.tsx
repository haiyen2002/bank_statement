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

      className="flex flex-col pt-5 pl-[33px] pr-[33px] pb-6 h-full h-[1117px] mx-auto  w-[794px]" >
      {header ? (<header>
        {/* Header top */}
        <div className="flex justify-between pt-[5px]">
          <div className="flex" style={{ flexDirection: "column" }}>
            <div className="mb-[4px]">
              <b>Chi nhánh:</b>
              <b>NHNopasdfnasd ádfaskdjfhasd</b>
            </div>
            <div className="mb-[4px]">
              <span>Địa chỉ:</span>
              <span>TX Cửa lò, Nghệ An</span>
            </div>
            <div className="">
              <span>Điện thoại/Fax:</span>
            </div>
          </div>
          <div className="">
            <img className="h-[50px] w-[190px]" src={agr.src} />
          </div>
        </div>
        <div style={{ border: "1px solid" }}></div>


        {/* Header mid */}

        <div>
          <div className="mt-3">
            <div style={{ fontSize: "19px", textAlign: "center" }} className="mb-[12px]">
              <b className="">
                SỔ PHỤ / STATEMENT
              </b>
            </div>

            <div>
              <div>
                <b>Tên khách hàng</b><span>/ Customer name : </span> <span>Nguyễn Huy XÔ</span>
              </div>
              <div>
                <b>Địa chỉ</b><span> / Address : </span> <span> Khóm 3, TT Định An Trà Vinh</span>
              </div>
              <div>
                <b>Ngày in</b><span> / Address : </span> <span> Khóm 3, TT Định An Trà Vinh</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      ) :
        (
          <div >

          </div>
        )
      }

      {/* Table */}
      {/* <div ref={wrapperRef} className={`mt-1 ${hasLast ? "" : "h-[565px] overflow-x-hidden"}`}> */}
      <div ref={wrapperRef} style={!header ? { marginTop: "30px", height: "940px" } : { height: "650px" }}>
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
              <th style={{ width: "180px" }}>
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
                    <div className="flex pl-[6px] pt-[2px]" style={{ lineHeight: "13px", display: "inline-block", width: "100%" }}>
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
                    <div className="flex  pt-[1px]" style={{ lineHeight: "16px", display: "inline-block", width: "100%", textAlign: "end" }}>
                      <span className="inline-block min-h-[16.5px]" />
                      {item.c != "" && item.c != null && formatCurrency(item.c)}
                    </div>
                  </td>
                  <td  >
                    <div className="flex  pt-[1px]" style={{ lineHeight: "16px", display: "inline-block", width: "100%", textAlign: "end" }}>
                      <span className="inline-block min-h-[16.5px]" />
                      {item.d != "" && item.d != null && formatCurrency(item.d)}
                    </div>
                  </td>
                  <td  >
                    <div className="flex  pt-[1px]" style={{ lineHeight: "16px", display: "inline-block", width: "100%", textAlign: "end" }}>
                      <span className="inline-block min-h-[16.5px]" />
                      {item.e != "" && item.e != null && formatCurrency(item.e)}
                    </div>
                  </td>
                  <td style={{ width: "242px" }} className="detail-cl">
                    <div className="test-class pl-[4px]  pt-[1px]" style={{ textAlign: "left", lineHeight: "16px", display: "inline-block", width: "217px", wordWrap: "break-word" }}>
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

      <footer className="mt-auto pt-2 text-[11px] text-center leading-[1.15] tracking-[-0.3px]">
        <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "14px" }}>
          <div className="mb-[2px]" >
            <p style={{ textAlign: "left" }}>Postal address: </p>
            <p style={{ textAlign: "left" }}>198 TRAN QUANG KHAI AVENUE </p>
            <p style={{ textAlign: "left" }}>HANOI - S.R.VIETNAM</p>
          </div>
          <div style={{ width: "240px" }}>
            <p style={{ textAlign: "left" }}>Telex:  (0805) 411504 VCB - VT </p>
            <p style={{ textAlign: "left" }}>Swift:  BFTV VNVX </p>
            <p style={{ textAlign: "left" }}>Website:  www.vietcombank.com.vn</p>
            <p style={{ textAlign: "left" }}>Contact center: 1900.54.54.13</p>
          </div>
        </div>
        <div className="mt-1 mt-auto " style={{ width: "100%" }}>
          <p style={{ textAlign: "right" }}>Page {page} of &nbsp;{totalPage}</p>
        </div>
      </footer>


    </section>
  );
};

export default Template;
