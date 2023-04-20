import { Request, Response } from "express";

export const getNames = async (req: Request, res: Response) => {
    //call
    res.json({
        name: "Arjun"
    })
}