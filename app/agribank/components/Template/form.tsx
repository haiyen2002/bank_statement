"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo";
import style from "./style.module.scss";
import { info } from "../../assets/data";
import moment from "moment";
import agr from "../../assets/lg1.png";
import Total from "./total";
import bg from "../../assets/sk2.jpg";

const Form = ({
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

      className="flex flex-col pt-[40px] pl-[63px] pr-[63px] pb-6 h-full h-[1117px] mx-auto  w-[794px]" style={{position:"relative"}}>
      {/* Header top */}
      <div className="pt-[5px] w-[100%] h-[90px]" style={{ position: 'relative', fontWeight: 700 }}>
        <div className="flex mt-7" style={{ flexDirection: "column", alignItems: "center", fontSize: "16px" }}>
          <div>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
          <div className="mt-[3px]">Độc lập - Tự do - Hạnh Phúc</div>
        </div>
        <div className="w-[170px]" style={{ position: "absolute", right: "0px", top: "0px" }}>
          <img className="mb-3 h-[50px] w-[180px]" src={agr.src} />
          <div className="border_div w-[150px] ml-[20px]">
            Mẫu 07/TGTX
          </div>
        </div>
      </div>
      <div className="text-center" style={{ fontWeight: "700" ,fontSize:"15.5px"}}>
        XÁC NHẬN SỐ DƯ TÀI KHOẢN
      </div>
      <div className="flex mt-3 mb-3" >
        <span className="w-[200px] text-center" style={{ lineHeight: "20px" }}>Ngày xác nhận</span>
        <div style={{ width: "315px" }} className="border_div">
        08/05/2024
        </div>
      </div>
      <div style={{ border: "1px solid", borderBottomStyle:"none" }}></div>
      <div className="mt-[4px]">Kính gửi các cơ quan hữu quan,</div>
      <div className="mt-[4px]">Ngân hàng Nông Nghiệp phát triển nông thôn Việt Nam (Agribank)</div>
      <div className="mt-[4px] flex">
        <div className="w-[105px]" style={{ lineHeight: "25px" }}>Chi nhánh</div>
        <div className="border_div" style={{ width: "calc(100% - 105px)" }}>THUẬN THÀNH-BẮC NINH </div>
      </div>
      <div className="mt-4 flex">
        <div className="w-[105px]" style={{ lineHeight: "25px" }}>Phòng giao dịch</div>
        <div className="border_div" style={{ width: "calc(100% - 105px)" }}>PHỐ HỒ</div>
      </div>
      <div className="mt-4 flex">
        <div className="w-[105px]" style={{ lineHeight: "25px" }}>Địa chỉ:</div>
        <div className="border_div" style={{ width: "calc(100% - 105px)" }}> Phố Hồ, Huyện Thuận Thành, Tỉnh Bắc Ninh</div>
      </div>
      <div className="mt-4 flex">
        <div className="flex">
          <div className="w-[105px]" style={{ lineHeight: "25px" }}>Số điện thoại:</div>
          <div className="border_div" style={{ width: "160px" }}>024.3205.3205</div>
        </div>
        <div className="flex">
          <span className=" ml-[90px] text-center" style={{ lineHeight: "25px" }}>Fax:</span>
          <div className="  ml-[40px] border_div " style={{ width: "160px" }}>8424.38313719</div>
        </div>


      </div>
      <div className="mt-4">Chúng tôi xin xác nhận thông tin dưới đây tính đến thời điểm 15h26' ngày 08/05/2024:</div>
      <div className="mt-[4px] flex">
        <div className="w-[105px]" style={{ lineHeight: "25px" }}>Tên khách hàng</div>
        <div className="border_div" style={{ width: "calc(100% - 105px)" }}> <b>NGUYỄN THỊ CÚC</b> </div>
      </div>
      <div className="mt-4 flex">
        <div className="w-[105px]" style={{ lineHeight: "25px" }}>Địa chỉ</div>
        <div className="border_div" style={{ width: "calc(100% - 105px)" }}>Xã Đại Đồng Thành,Huyện Thuận Thành, Bắc Ninh</div>
      </div>
      <div className="mt-4 flex">
        <div className="flex">
          <div className="w-[105px]" style={{ lineHeight: "25px" }}>Số CMT/CCCD</div>
          <div className="border_div" style={{ width: "160px" }}>027183010058  </div>
        </div>
        <div className="flex" >
          <div className=" ml-[90px] w-[65px] text-left" style={{ lineHeight: "25px" }}>Ngày cấp:</div>
          <div className=" border_div  ml-[83px]" style={{ width: "165px" }}> 17/09/2021</div>
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="w-[105px]" style={{ lineHeight: "25px" }}>Nơi cấp</div>
        <div className="border_div" style={{ width: "453px" }}>Cục Cảnh sát Quản lý Hành chính về Trật tự xã hội</div>
      </div>
      <div className="mt-4">
        <div className="mb-4">
         <b> Đang có tiền gửi tiết kiệm tại Ngân hàng Agribank:</b>
          
        </div>
        <div ref={wrapperRef} >
            <table className={`w-full ${style.table}`}>
              <thead>
                <tr>
                  <th className="w-[25px]">
                    <div className="w-[25px]" style={{ flexDirection: "column" }}>
                      <b>STT</b>
                    </div>
                  </th>
                  <th className="w-[155px]">
                    <div className="w-[155px]" style={{ flexDirection: "column" }}>
                      <b>Số tài khoản</b>
                    </div>
                  </th>
                  <th className="w-[165px]">
                    <div className="w-[165px]" style={{ flexDirection: "column" }}>
                      <b>Tên tài khoản</b>
                    </div>
                  </th>
                  <th className="w-[66px] text-center">
                    <div className="w-[63px]" style={{ flexDirection: "column" }}>
                      <b>Ngày gửi</b>
                    </div>
                  </th>
                  <th className="w-[55px]">
                    <div className="w-[55px]" style={{ flexDirection: "column" }}>
                      <b>Thời hạn</b>
                    </div>
                  </th>
                  <th className="w-[80px]" style={{ textAlign: "center" }}>
                    <div style={{ width: "80px" }}>
                      <b>Số dư đến thời điểm xác nhận</b>
                    </div>
                  </th>
                  <th className="w-[30px]">
                    <div style={{ width: "30px" }}>
                      <b>Loại tiền tệ</b>
                    </div>
                  </th>
                  <th className="w-[80px]">
                    <div className="w-[80px]" style={{ flexDirection: "column" }}>
                      <b>Tình trạng tài khoản TGTK</b>
                      <p className="text-center"><i>(1)</i></p>

                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr  style={{ height: "20px" }}>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    01
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                  3108205443130
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    Nguyễn Thị Cúc
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    06/04/2024
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    12 tháng
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    550,000,000
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    VND
                  </td>
                  <td className="pt-1" style={{ textAlign: "center" }}>
                    Bình thường
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <div className="mt-1">Số dư tài khoản của ông/bà Nguyễn Thị Cúc là: 550,000,000 VND</div>
        <div className="mt-1">Bằng chữ: Năm trăm năm mươi triệu đồng.</div>
      </div>
      <div className="mt-3 flex justify-end h-[240px]">
        <div className="w-[280px]">
        <div className="text-center"><b>GIÁM ĐỐC</b></div>
        <div className="text-center"><i>(Ký, ghi rõ họ tên, đóng dấu)</i></div>
        </div>
      </div>

      <div className="" style={{wordSpacing:"1px"}}>
        <div><u><b>Ghi chú:</b></u> Giấy tờ này không thay cho các cam kết của Agribank về các nghĩa vụ của khách hàng được xác nhận với bên thứ 3</div>
        <div className="mt-[4px]"><i>(1) Ghi rõ tình trạng của tài khoản TGTK (Đang cầm cố, thế chấp,...)</i></div>
      </div>
      <div style={{position:"relative"}}>
      <img className="mb-3 h-[50px] w-[180px]" style={{position:"absolute", left:"-35px", top:"10px"}} src={agr.src} />

      </div>

    </section>
  );
};

export default Form;
