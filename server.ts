import express , {Express, Request, Response, NextFunction} from "express";
import fs from "fs";
import cors from 'cors';
import {Contact} from "./types.ts"
import {readDB, writeDB} from "./db.ts"

const app: Express = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));


app.get("/contact", (req: Request,res: Response) => {
    const customerMessage = JSON.parse(readDB("messages.json"));
    res.json(customerMessage);
    console.log(customerMessage)
})

app.post("/contact", (req: Request, res: Response) => {
    const {firstName, lastName, email, phone, message } = req.body;
    const list = JSON.parse(fs.readFileSync("messages.json","utf-8"));
    const newMessage: Contact = {id: list.length+1, firstName, lastName, email, phone, message };
    list.push(newMessage);
    writeDB("messages.json", list);
    res.json({message: "added successfully !"})
})

app.listen(5000, ()=> console.log("Server is running on port 5000...."))