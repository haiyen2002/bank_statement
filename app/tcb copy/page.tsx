import { data } from "./assets/data";
import Template from "./components/Template";
import bg from "./assets/bg.jpg";

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
	data={data.slice(0,10)}
	page={1}
	totalPage={225}
/>


    </main>
  );
};
// 

export default Tcb;
