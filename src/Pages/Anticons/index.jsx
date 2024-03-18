import { styled } from "@mui/material/styles";
const AnticonWrapperpage = styled("iframe")(() => ({
  height: "80vh",
}));

// ============================ ANT ICONS ============================ //

const Anticons = () => (
  <div>
    <div title="Ant Icons" className="bg-white">
      <p className="text-[12px] px-4 py-4 font-semibold"> Ant Icons</p>
      <AnticonWrapperpage
        title="Ant Icon"
        width="101%"
        src="https://ant.design/components/icon/"
      />
    </div>
  </div>
);

export default Anticons;
