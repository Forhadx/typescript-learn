import { IStudent } from "@/interfaces/IStudents";

const StudentPage = ({ student }: { student: IStudent }) => {
  return (
    <div>
      <h1>--Student--</h1>
      <p>{student?.name}</p>
      <p>{student?.age}</p>
      <p>{student?.phone}</p>
      <p>{student?.language.map((i) => i + " ")}</p>
    </div>
  );
};

export default StudentPage;
