import { useState } from "react";
import Card from "../Card";
import List from "../List";
import Button from "../Button";


export default function Exercise1() {
    const [count, setCount] = useState(0);

    return (
        <div className="pl-3">
            <h1 className="text-xl font-bold">Liste</h1>
            <div className="flex flex-col gap-2">
                <List item="Coffee" />
                <List item="Tea" />
                <List item="Butter" />
            </div>

            <h1 className="mt-10 text-lg font-semibold">Button-Count: {count}</h1>
            <div className="mt-4">
                <Button element="Sendar" count={count} setCount={setCount} />
            </div>

            <h1 className="mt-10 text-lg font-semibold">Card</h1>
            <div className="flex flex-col gap-4">
                <Card image={"/avatar.png"} name={"John Doe"} jobtitle={"Architect & Engineer"}></Card>
            </div>
        </div>
    );
}
