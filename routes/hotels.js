import express  from "express";
import Hotel from "../models/Hotel.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post('/',verifyAdmin,createHotel)
//delete
router.delete('/:id',verifyAdmin,deleteHotel)
//update
router.put('/:id',verifyAdmin,updateHotel)
//get
router.get('/find/:id',getHotel)
//getall
router.get('/',getHotels)


router.get('/countByCity',countByCity)
router.get('/countByType',countByType)
export default router;