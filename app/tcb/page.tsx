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
	totalPage={15}
/>

<Template
	data={data.slice(8,22)}
	page={2}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(22,35)}
	page={3}
  header={false}
	totalPage={15}
/>

<Template
	data={data.slice(35,49)}
	page={4}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(49,63)}
	page={5}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(63,75)}
	page={6}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(75,88)}
	page={7}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(88,101)}
	page={8}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(101,115)}
	page={9}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(115,129)}
	page={10}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(129,143)}
	page={11}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(143,156)}
	page={12}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(156,171)}
	page={13}
  header={false}
	totalPage={15}
/>
<Template
	data={data.slice(171,183)}
	page={14}
  header={false}
	totalPage={15}
/>

      <Total 	page={15} totalPage={15}/>

    </main>
  );
};
// 

export default Tcb;
