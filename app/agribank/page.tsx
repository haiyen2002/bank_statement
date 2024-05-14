import { data } from "./assets/data";
import bg from "./assets/bg-agr.jpg";
import Total from "./components/Template/total";
import Form from "./components/Template/form";

const agribank = async () => {
  return (
    <main
      className=""
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: "flex flex-col",
        backgroundRepeat: "no-repeat",
        
      }}
    >
<Form
	data={data.slice(0,9)}
	page={1}
    header={true}
	totalPage={21}
/>

{/* <Template
	data={data.slice(9,25)}
	page={2}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(25,42)}
	page={3}
  header={false}
	totalPage={21}
/>

<Template
	data={data.slice(42,58)}
	page={4}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(58,72)}
	page={5}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(72,88)}
	page={6}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(88,102)}
	page={7}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(102,118)}
	page={8}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(118,133)}
	page={9}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(133,149)}
	page={10}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(149,165)}
	page={11}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(165,179)}
	page={12}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(179,197)}
	page={13}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(197,212)}
	page={14}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(212,228)}
	page={15}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(228,245)}
	page={16}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(245,260)}
	page={17}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(260,276)}
	page={18}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(276,292)}
	page={19}
  header={false}
//   footer={true}
	totalPage={21}
/>
<Template
	data={data.slice(292,302)}
	page={20}
  header={false}
	totalPage={21}
/>
      <Total 	page={21} totalPage={21}/> */}

    </main>
  );
};
// 

export default agribank;
