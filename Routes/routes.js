var express=require("express")
var router=express.Router()
router.use(express.json())
var {ManyUsers,OneUser,ListOfUsers,UpdateUser,DeleteUser,DeleteAllUsers}=require("../Controllers/Controller")

//Find List Of Users

router.get("/",ListOfUsers)

//Posting Many Users

router.post("/Users",ManyUsers)  
//Posting One User

router.post("/User",OneUser)

// Updating a User with id

router.put("/:id",UpdateUser)

//Deleting a User with id

 router.delete("/Delete/:id",DeleteUser)

//Deleting All Users

  router.delete("/RemoveCollection",DeleteAllUsers)
 module.exports=router