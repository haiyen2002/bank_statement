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
	data={data.slice(0,8)}
	page={1}
  header={true}
	totalPage={20}
/>

<Template
	data={data.slice(8,23)}
	page={2}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(22,38)}
	page={3}
  header={false}
	totalPage={20}
/>

<Template
	data={data.slice(38,55)}
	page={4}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(55,70)}
	page={5}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(70,86)}
	page={6}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(85,100)}
	page={7}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(100,116)}
	page={8}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(116,131)}
	page={9}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(131,147)}
	page={10}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(147,163)}
	page={11}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(163,178)}
	page={12}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(178,194)}
	page={13}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(194,210)}
	page={14}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(210,226)}
	page={15}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(226,242)}
	page={16}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(242,258)}
	page={17}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(258,274)}
	page={18}
  header={false}
	totalPage={20}
/>
<Template
	data={data.slice(274,282)}
	page={19}
  header={false}
	totalPage={20}
/>
      <Total 	page={20} totalPage={20}/>

    </main>
  );
};
// 

export default Tcb;
