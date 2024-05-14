"use client";
import { data } from "./assets/data";
import Template from "./components/Template";
import bg from "./assets/bg.jpg";

const tech = async () => {
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
	data={data.slice(0,11)}
	page={1}
  hasFirst={true}
	totalPage={7}
/>
<Template
	data={data.slice(11,22)}
	page={2}
	totalPage={7}
/>
<Template
	data={data.slice(22,34)}
	page={3}
	totalPage={7}
/>
<Template
	data={data.slice(34,44)}
	page={4}
	totalPage={7}
/>
<Template
	data={data.slice(44,55)}
	page={5}
	totalPage={7}
/>
<Template
	data={data.slice(55,66)}
	page={6}
	totalPage={7}
/>
<Template
	data={data.slice(66,77)}
	page={7}
  hasLast={true}
	totalPage={7}
/>


    </main>
  );
};
// 

export default tech;
