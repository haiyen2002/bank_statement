import { data } from "./assets/data";
import Template from "./components/Template";
import bg from "./assets/sk.jpg";
import Total from "./components/Template/total";

const Tcb = async () => {
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
<Template
	data={data.slice(0,9)}
	page={1}
    header={true}
	totalPage={21}
/>

<Template
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
	data={data.slice(42,59)}
	page={4}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(59,74)}
	page={5}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(74,90)}
	page={6}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(90,106)}
	page={7}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(106,122)}
	page={8}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(122,137)}
	page={9}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(137,153)}
	page={10}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(153,169)}
	page={11}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(169,185)}
	page={12}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(185,202)}
	page={13}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(202,218)}
	page={14}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(218,235)}
	page={15}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(235,252)}
	page={16}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(252,269)}
	page={17}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(269,284)}
	page={18}
  header={false}
	totalPage={21}
/>
<Template
	data={data.slice(284,300)}
	page={19}
  header={false}
//   footer={true}
	totalPage={21}
/>
<Template
	data={data.slice(300,302)}
	page={20}
  header={false}
	totalPage={21}
/>
      <Total 	page={21} totalPage={21}/>

    </main>
  );
};
// 

export default Tcb;
