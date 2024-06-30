import ModulesControls from "./ModulesControls";
import '../../styles.css'; 
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlsButtons from "./ModuleControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
 export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div id="wd-modules">
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0 " >
          {modules
            .filter((module:any) => module.course === cid)
            .map((module:any, index) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlsButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      {/* <LessonControlButtons /> */}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
