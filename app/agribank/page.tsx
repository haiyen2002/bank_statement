import { data } from "./assets/data";
import bg from "./assets/bg-agr.jpg";
import Total from "./components/Template/total";
import Template from "./components/Template";

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
{/* <Form
	data={data.slice(0,9)}
	page={1}
    header={true}
	totalPage={5}
/> */}

<Template
	data={data.slice(0,19)}
	page={1}
  header={true}
	totalPage={5}
/>
<Template
	data={data.slice(19,45)}
	page={2}
	totalPage={5}
/>
<Template
	data={data.slice(45,76)}
	page={3}
	totalPage={5}
/>
<Template
	data={data.slice(76,105)}
	page={4}
	totalPage={5}
/>
<Template
	data={data.slice(105,134)}
	page={5}
	totalPage={5}
/>

    </main>
  );
};
// 

export default agribank;
