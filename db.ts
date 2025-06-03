import fs from "fs"

export function readDB(file: string) {
    return fs.readFileSync(file, "utf-8")
}

export function writeDB(file: string, data: string){
    fs.writeFileSync("messages.json", JSON.stringify(data), "utf-8");
}