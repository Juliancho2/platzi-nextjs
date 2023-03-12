import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import data from "../../../database/data";
import DB from "../../../database/db";


const getOneAvo = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query } = req;
    const db = new DB();
    const entry = await db.getById(query.idItem as string);
    res.status(200).json(entry)

}

export default getOneAvo