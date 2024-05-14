import { data } from "./assets/data";
import Template from "./components/Template";
import bg from "./assets/bg-agr.jpg";
import Total from "./components/Template/total";

const bidv = async () => {
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
	data={data.slice(0,18)}
	page={1}
    header={true}
	totalPage={6}
/>
<Template
	data={data.slice(18,44)}
	page={2}
	header={false}
	footer={false}
	totalPage={6}
/>
<Template
	data={data.slice(44,70)}
	page={3}
	header={false}
	footer={false}
	totalPage={6}
/>
<Template
	data={data.slice(70,95)}
	page={4}
	header={false}
	footer={false}
	totalPage={6}
/>

<Template
	data={data.slice(95,122)}
	page={5}
	header={false}
	footer={false}
	totalPage={6}
/>


<Template
	data={data.slice(122,138)}
	page={6}
	header={false}
	footer={true}
	totalPage={6}
/>

    </main>
  );
};
// 

export default bidv;
