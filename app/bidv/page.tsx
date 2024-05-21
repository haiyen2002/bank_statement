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
	data={data.slice(0,15)}
	page={1}
    header={true}
	totalPage={3}
/>

<Template
	data={data.slice(15,38)}
	page={2}
	totalPage={3}
/>

<Template
	data={data.slice(38,40)}
	page={3}
	header={false}
	footer={true}
	totalPage={3}
/>

    </main>
  );
};
// 

export default bidv;
