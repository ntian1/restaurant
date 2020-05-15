import * as express from "express"
import { v4 as uuid } from 'uuid'
import {reservation} from "./reservation"
import {restaurant} from "./restaurant"

const router: any = express.Router()

router.get("/restaurant", async (req: express.Request, res: express.Response) => {
    try {
        const data = await restaurant.findAll();
        return data;
    }
    catch (e) {
        res.status(500).json({message: "Something wrong"});
    }
})

router.get("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const data = await restaurant.find(req.params.id);
        if(data.length == 0) {
            res.status(200).json({message: "Not found with this id"});
        }
        else {
            delete data[0]._id;
            res.status(200).json(data[0]);
        }
    }
    catch (e) {
        res.status(500).json({message: "Something wrong"});
    }
});

router.post("/", async (req: express.Request, res: express.Response) => {
    const request = req.body;
    try {
        await restaurant.create(request["name"], request["connection"], request["location"], 0,0,request["money_cost"],
        request["time_avaliable"],request["cusine"],request["people"]);
        res.status(200).json({message: "creation successful"});
    }
    catch (e) {
        res.status(500).json({message: "Something wrong"});
    }
});
/*restaurant_id:string,name: string, connection: string, date:String,time:string
// reservation request: name conteaction, date, time
*/ 


router.post("/:id/reservation", async (req: express.Request, res: express.Response) => {
    try {
        const request = req.body;
        if(request["name"]==null||request["comment"]==null) 
        throw ""
        const id = req.params.id;

        await reservation.create(id, request["name"], request["connnection"],request["time"]);
        await restaurant.updateTime(id,request["time"]);
        
        res.status(200).json({message: "creat successful"});
    }
    catch (e) {
        res.status(500).json({message: "something wrong"});
    }
});

export {router}