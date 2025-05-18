import { Link } from "react-router-dom";
import Card from "../Card";


export default function Page1() {
    const person = { firstname: "hans", lastname: "müller" }
    return (
        <div className="w-screen bg-amber-200">
            <div className="grid grid-cols-3 w-screen gap-2">
                <Card name={"David"} jobtitle={"Entwickler"} />
                <Card name={"Anna"} jobtitle={"Managerin"} />
                <Card name={"Romina"} jobtitle={"Designer"} />
                <Card name={"Nikola"} jobtitle={"Tester"} />
                <Card name={"Alex"} jobtitle={"Support"} />
                <Card name={"Pino"} jobtitle={"Marketing"} />
            </div>
            <Link
                to="/p2"
                state={{ person: person, title: "test" }}
                className="bg-green-400 rounded-2xl hover:cursor-pointer hover:bg-green-900 p-4">
                Page2
            </Link>
        </div>
    );
}
