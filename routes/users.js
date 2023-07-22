import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser,verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

// router.get('/checkauthentication',verifyToken,(req,res,next)=>
// {
//           res.send("hello user you are logged in..")
// })

// router.get('/checkuser/:id',verifyUser,(req,res,next)=>
// {
//     res.send("hello user you are logged in and can delete account ..")
// })
// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>
// {
//     res.send("hello admin you are logged in and can delete all account ..")
// })
//delete
router.delete('/:id',verifyUser,deleteUser)
//update
router.put('/:id',verifyUser,updateUser)
//get
router.get('/:id',verifyUser,getUser)
//getall
router.get('/',verifyAdmin,getUsers)
export default router;