import { styled } from "@mui/material/styles";
const AnticonWrapperpage = styled("iframe")(() => ({
  height: "80vh",
}));

const Anticons = () => (
  <div>
    <div title="Ant Icons" className="bg-white">
      <p className="text-[12px] px-4 py-6 font-bold"> Ant Icons</p>
      <AnticonWrapperpage
        title="Ant Icon"
        width="98%"
        src="https://ant.design/components/icon/"
      />
    </div>
  </div>
);

export default Anticons;
