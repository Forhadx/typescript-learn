import LanguagePage from "@/components/language";
import LatestPrices from "@/components/latestPrices";
import StudentPage from "@/components/student";
import { IStudent } from "@/interfaces/IStudents";

async function getStudent(): Promise<IStudent> {
  const res = await fetch("http://localhost:5040/student");
  return res.json();
}

async function getLatestPrices(): Promise<ILatestPrices> {
  const res = await fetch("http://localhost:5040/latestPrices");
  return res.json();
}

export default async function Home() {
  const color: Color = "blue";
  const coords: Coordinates = [12.11, 23];
  const language: string[] = ["java", "c++", "python"];

  const student: IStudent = await getStudent();
  const latestPrices: ILatestPrices = await getLatestPrices();

  // console.log(latestPrices);

  return (
    <main className="flex flex-col p-20">
      <div className="border border-red-100 p-6 mb-2">
        <h1>Color:</h1>
        <p>{color}</p>
        <br />
        <h1>Coordinates:</h1>
        <p>{coords[0] + " - " + coords[1]}</p>
        <br />
        <LanguagePage language={language} />
      </div>
      <div className="border border-red-100 p-6">
        <StudentPage student={student} />
      </div>

      <div className="border border-red-100 p-6">
        <LatestPrices latestPrices={latestPrices} />
      </div>
    </main>
  );
}
