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
	totalPage={20}
/>

<Template
	data={data.slice(9,25)}
	page={2}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(25,42)}
	page={3}
  header={false}
	totalPage={20}
/>

<Template
	data={data.slice(42,58)}
	page={4}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(58,73)}
	page={5}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(73,89)}
	page={6}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(89,105)}
	page={7}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(105,121)}
	page={8}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(121,136)}
	page={9}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(136,153)}
	page={10}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(153,169)}
	page={11}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(169,185)}
	page={12}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(185,202)}
	page={13}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(202,218)}
	page={14}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(218,235)}
	page={15}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(235,252)}
	page={16}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(252,269)}
	page={17}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(269,284)}
	page={18}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(284,299)}
	page={19}
  header={false}
//   footer={true}
	totalPage={20}
/>
<Template
	data={data.slice(299,302)}
	page={20}
  header={false}
	totalPage={20}
/>
      <Total 	page={20} totalPage={20}/>

    </main>
  );
};
// 

export default Tcb;
