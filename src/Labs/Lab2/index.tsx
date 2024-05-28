import "./index.css";
import StyleAttribute from "./StyleAttribute";
import IdSelector from "./IdSelector";
import ClassSelectors from "./ClassSelector";
import DocumentStructureStyle from "./DocumentStructureStyle";
import ForegroundColor from "./ForegroundColor";
import BackgroundColor from "./BackgroundColor";
import Borders from "./Borders";
import Paddings from "./Paddings";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import RelativePosition from "./RelativePosition";
import AbsolutePosition from "./AbsolutePosition";
import FixedPosition from "./FixedPosition";
import ZIndex from "./ZIndex";
import FloatImages from "./FloatImages";
import GridLayouot from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconsSampler";
import GridSystem from "./GridSystem";
export default function Lab2() {
        return (
          <div id="wd-lab2" className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <StyleAttribute />
            <IdSelector />
            <ClassSelectors />
            <DocumentStructureStyle />
            <ForegroundColor />
            <BackgroundColor />
            <Borders />
            <Paddings />
            <Margins />
            <Corners />
            <Dimensions />
            <RelativePosition />
            <AbsolutePosition /> 
            <FixedPosition />
            <ZIndex />
            <FloatImages />
            <GridLayouot />
            <Flex />
            <ReactIconsSampler />
            <GridLayouot />
          </div>
        );
}
      