import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignmentWarning from "./DeleteAssignmentWarning";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

interface LessonControlButtonsProps {
  assignmentTitle: string;
  assignmentId: string;
}

export default function LessonControlButtons({
  assignmentTitle,
  assignmentId,
}: LessonControlButtonsProps) {
  const dispatch = useDispatch();

  const handleDeleteAssignment = () => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        data-bs-toggle="modal"
        data-bs-target={`#delete-assignment-modal-${assignmentId}`}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeleteAssignmentWarning
        dialogTitle="Warning"
        assignmentTitle={assignmentTitle}
        assignmentId={assignmentId}
        deleteAssignment={handleDeleteAssignment}
      />
    </div>
  );
}
