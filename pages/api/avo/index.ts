import { IncomingMessage, ServerResponse } from "http";
import data from "../../../database/data";
import DB from "../../../database/db";


const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ data: allEntries, length: allEntries.length }))

}

export default allAvos