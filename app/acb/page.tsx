import { data } from "./assets/data";
import Template from "./components/Template";
import bg from "./assets/bg-agr.jpg";
import Total from "./components/Template/total";

const acb = async () => {
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
	data={data.slice(0,21)}
	page={1}
    header={true}
	totalPage={5}
/>

<Template
	data={data.slice(21,41)}
	page={2}
  header={false}
	totalPage={5}
/>
<Template
	data={data.slice(41,62)}
	page={3}
  header={false}
	totalPage={5}
/>

<Template
	data={data.slice(62,82)}
	page={4}
  header={false}
  footer={false}
	totalPage={5}
/>
<Template
	data={data.slice(82,100)}
	page={5}
  header={false}
  footer={true}
	totalPage={5}
/>
    </main>
  );
};
// 

export default acb;
