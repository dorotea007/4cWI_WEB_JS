import React from "react";
import Card from "../Card";
import Button from "../Button";
import DropDown from "../DropDown";
import Container from "../Container";
import { Link } from "react-router";

export default function Page1() {
    return (
        <div className="w-screen bg-amber-200 p-4">
            <div className="grid grid-cols-3 gap-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Button />
            <DropDown />
            <Container />
            <Link to="/p2">Page2</Link>;
            </div>
    );
}
