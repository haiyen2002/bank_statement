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

      className="flex flex-col pt-10 pl-[50px] pr-[50px] pb-6 h-full h-[1116px] mx-auto  w-[804px]" >
      {/* {header ? ( */}
        <header> 
        {/* Header top */}
        <div className="flex justify-end" >
          <div className="w-[200px]">
            <div className="flex"><div className="w-[120px] text-right mr-1">Page : </div><div> {page} of {totalPage}</div> </div>
            <div className="flex"><div className="w-[120px] text-right mr-1">Account Number : </div><div> {info.accountNumber}</div> </div>
            <div className="flex"><div className="w-[120px] text-right mr-1">Statement : </div><div> {info.date}</div> </div>
            <div className="flex"><div className="w-[120px] text-right mr-1">Number of Check : </div><div> 0</div> </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex mt-1"><div className="w-[20px]">---- </div><span>PersNbr : </span> <span>{info.persNbr}</span></div>
          <div className="flex mt-1"><div className="w-[20px]"></div><span>{info.name}</span></div>
          <div className="flex mt-1"><div className="w-[20px]"></div><span>Ma so thue :</span>{info.tax}</div>
          <div className="flex mt-1"><div className="w-[20px]">---- </div><span>{info.address}</span></div>
          <div className="flex mt-1"><div className="w-[20px]">---- </div><span>{info.address2}</span></div>
          <div className="flex mt-1"><div className="w-[20px]"></div><span>{info.address3}</span></div>
        </div>
        <div>
          <div style={{fontSize:"14px"}}><b className="mr-[115px] ml-[45px]">BANG KE GD&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;TGTT KHTN (CA NHAN) VND Checking</b> <b>{info.accountNumber}</b></div>
          <div className="flex mt-1 mb-2">
            <div className="ml-[55px] mr-[166px]">
            <b className="mr-3">Tu ngay:</b> <span>{info.fromDate}</span>
            </div>
            <div>
            <b className="mr-3">Den ngay:</b> <span>{info.toDate}</span>
            </div>
          </div>
          <div className="flex justify-between pl-[10px]  mb-3">
            <div className="w-[100px] flex" style={{alignItems:"center",flexDirection:"column"}}>
              <b className="mb-1">So du dau</b>
              <p>{info.open}</p>
            </div>
            <div className="flex w-[70px]" style={{alignItems:"center",flexDirection:"column"}}>
              <b className="mb-1">+ Gui vao</b>
              <p >{info.saving}</p>
            </div>
            <div className="flex w-[100px]" style={{alignItems:"end",flexDirection:"column"}}>
              <b className="mb-1">(Lai nhap von)</b>
              <p >{info.profit}</p>
            </div>
            <div className="flex w-[120px]" style={{alignItems:"right",flexDirection:"column"}}>
              <b className="mb-1 "><p className="pl-[50px]">- Rut ra</p></b>
              <p className="w-[100%] text-right">{info.consumer}</p>
            </div>
            <div className="flex w-[103px]" style={{alignItems:"center",flexDirection:"column"}}>
              <b className="mb-1">- Phi =</b>
              <p></p>
            </div>
            <div className="flex w-[103px]" style={{alignItems:"center",flexDirection:"column"}}>
              <b className="mb-1">So du cuoi</b>
              <p style={{width:"100%"}} className="text-right">{info.end}</p>
            </div>
          </div>
        </div>
      </header>
      {/* // ) :
      //   (
      //     <div >

      //     </div>
      //   )
      // } */}

      {/* Table */}
      {/* <div ref={wrapperRef} className={`mt-1 ${hasLast ? "" : "h-[565px] overflow-x-hidden"}`}> */}
      <div ref={wrapperRef} className="pl-[10px]" >
        <table className={`w-full ${style.table}`}>
          <thead>
            <tr>
              <th className="w-[40px] text-left">
                Ngay
              </th>
              <th className="text-left w-[285px]" >
                Dien giai
              </th>
              <th  className="text-center">
              <p className="pl-[38px]">Ghi no</p>
              </th>
              <th className="text-center w-[125px]" >
               <p className="pl-[40px]">Ghi co</p>
              </th>
              <th className="text-center w-[125px]">
                <p className="pl-[30px]">So du</p>
              </th>
            </tr>
          </thead>

          <tbody>
           
            {/* Data Rows */}
            {data.map((item, index) => {

              return (
                <tr key={index} style={!hasLast && index === data.length - 1 ? { borderBottomStyle: "solid" } : {}} className={!hasLast && index === data.length - 1 ? "last-row " : ""}>
                  <td  className="text-left">
                    {item.a}
                  </td>
                  <td className="pb-[4px] text-left ">
                    <div className="w-[252px]">
                    {item.b}

                    </div>
                  </td>
                  <td  className="text-right">
                  {item.e != ""?"-"+item.e:""}
                  </td>
                  <td   className="text-right w-[125x]">
                    <div className="">
                    {item.f}
                    </div>
                  </td>
                  <td   className="text-right w-[125px]">
                    <div className="">
                    {item.g}
                    </div>
                  </td>
                </tr>
              );
            })}


          </tbody>
        </table>
      </div>
      
      {footer && (
        <div className="mt-[20px]">
          <div style={{fontSize:"13px"}} className="ml-[530px]">GIAO DICH VIEN</div>
        </div>
      )}
      


    </section>
  );
};

export default Template;
