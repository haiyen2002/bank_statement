"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo";
import style from "./style.module.scss";
import { info } from "../../assets/data";
import moment from "moment";
import vcb from "../../assets/vcb.png";

const Total = ({
    data,
    hasFirst,
    hasLast,
    page,
    header,
    totalPage,
}: {
    data?: any[];
    hasFirst?: boolean;
    hasLast?: boolean;
    page?: number;
    header?: boolean;
    totalPage?: number;
}) => {
    const wrapperRef = useRef<any>(null)

    const formatCurrency = (number: any) => {
        const numStr = String(number).split('').reverse();
        const result = [];


        for (let i = 0; i < numStr.length; i++) {
            result.push(numStr[i]);
            if ((i + 1) % 3 === 0 && i !== numStr.length - 1) {
                result.push('.');
            }
        }

        return result.reverse().join('');
    }

    return (
        <section className="flex flex-col pt-5 pl-[33px] pr-[33px] pb-6 h-full h-[1117px] mx-auto  w-[794px]" >
            <div className="flex mb-2" style={{ lineHeight: "15px" }}>
                <div style={{ width: 160 }}>
                    <b>
                        <p> Tổng số:</p>
                        <p><i>Total</i></p>
                    </b>
                </div>
                <div className="flex" style={{ width: 110, justifyContent: "end" }}><b>359.732.865</b></div>
                <div className="flex" style={{ width: 110, justifyContent: "end" }}><b>386.494.021</b></div>
            </div>
            <div className="flex mb-2" style={{ lineHeight: "15px" }}>
                <div style={{ width: 380 }}>
                    <b>
                        <p> Số dư cuối kỳ:</p>
                        <p><i>Closing Balance</i></p>
                    </b>
                </div>
                <div className="flex" style={{ width: 110, justifyContent: "end" }}><b>43.861.037</b></div>
            </div>
            <div className="flex mb-[150px]" style={{ justifyContent: "end"}}>
                <div style={{width:"239px",textAlign:"center"}}>
                    <p><b>Xác nhận của ngân hàng</b></p>
                    <p><b><i>Bank's confirmation</i></b></p>
                </div>
            </div>

            <div className="flex mb-4" style={{ justifyContent: "center", lineHeight: "15px" }} >
                <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <p><b> <i>Trân trọng cảm ơn quý khách đã sử dụng dịch vụ của Vietcombank!</i></b></p>
                    <p>
                        <b>
                           <u> <i>Thank you for using Vietcombank's services! </i></u>


                        </b>
                    </p>
                </div>
            </div>

            <div className="flex mb-3" style={{ justifyContent: "center", lineHeight: "18px", fontSize: 16 }} >
                <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <p><b> VIETCOMBANK - Chung niềm tin vững tương lai </b></p>
                    <p>
                        <b>
                            <i>VIETCOMBANK - Together for the future  </i>


                        </b>
                    </p>
                    <p>***********</p>
                </div>
            </div>

            <div style={{ lineHeight: "18px",wordSpacing:"3px",fontSize:13 }}>
                <p >
                    <b>
                        <u>Ghi chú:</u>
                        <span> Giấy Xác nhận này của Ngân hàng TMCP Ngoại thương Việt Nam đảm bảo thông tin chính xác tại thời điểm xác nhận theo nội dung yêu cầu
                            của Khách hàng. Văn bản Xác nhận này không cấu thành bất kỳ cam đoan hay bảo đảm nào của Ngân hàng TMCP Ngoại thương Việt Nam tại thời
                            điểm hiện tại hay tương lai đối với các nghĩa vụ của Khách hàng xác lập với bên thứ ba./.</span>
                    </b>
                </p>
                <p>
                    <b>
                        <u>Note:</u></b>
                    <i> This letter of confirmation of the Joint Stock Commercial Bank for Foreign Trade of Vietnam ensures accurate information at the time of confirmation as
                        requested by the customer. This acknowledgment does not constitute any current or future guarantees of the customer's obligations confirmed to third parties./. </i>

                </p>
            </div>




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

export default Total;