// Importing express into this file.
const express = require("express");
// Importing routes as a function into this file.
const router = express.Router();
const path = require("path");
const farmerOne = require("../models/farmerOne");
// const passport = require('passport');
// const UrbanFarmer = require("../models/urbanFarmer");


router.get("/FarmerReg", (req, res) => {
  res.render("farmerOneReg");
});

// router.get("/productsReg", (req, res) => {
//   res.render("productsReg");
// });
//Uplloading data
router.post("/fRegister", async (req, res) => {
  try {
    const regFO = new farmerOne(req.body);
    console.log(regFO);
    await regFO.save();
    res.redirect("/Folist");
  } catch (err) {
    res.status(400).send("failed to post data");
  }
});
//retreiving data from the data base
router.get("/Folist", async (req, res) => {
  try {
    const FOs = await farmerOne.find();
    res.render("FOList", { users: FOs });
  } catch (err) {
    res.status(400).send("failed to post data");
  }
});

router.get("/UrbanReg", (req, res) => {
  res.render("urbanFarmer");
});


// //retreiving data from the data base
// router.get("/Folist", async (req, res) => {
//   try {
//     const FOs = await FarmerOne.find();
//     res.render("FOList", { users: FOs });
//   } catch (err) {
//     res.status(400).send("failed to post data");
//   }
// });

// router.get("/productsReg", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views", "/productsReg.html"));
// });

// router.get("/farmerOneReg", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views", "/farmerOneReg.html"));
// });

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views", "/index.html"));
// });

// router.post('/', (req, res) => {
//     passport.authenticate('local', (err, user, info) => {
//         console.log('body comming to passport ',req.body);

//         if (err) {
//             return next(err);
//         }
//         if (!user) return res.redirect('/?info=' + info);

//         req.logIn(user, function(err) {
//             if (err) return next(err);
//             return res.redirect('/supervisor');
//         });
//     })(req, res);
// });

// router.get('/test',(req,res)=>{
//     res.render('userUpdate')
// })

// router.post('/custreg', async (req, res) => {
//     try {
//        const newCustomer = new Customer(req.body)
//         await newCustomer.save()
//         res.redirect('/supervisor')
//     } catch (error) {
//        console.log(error);
//         res.status(404).send('unable to send to the database')
//     }
//  }
// )

// router.post('/employeereg', async (req, res) => {
//     try {
//         const newEmployee = new Employee(req.body)
//         await Employee.register(newEmployee, req.body.password, (err) =>{
//             if (err) throw err
//             res.redirect('/admin')
//         })
//     } catch (error) {
//        console.log(error);
//         res.status(404).send('unable to send to the database')
//     }
//  })

// router.get('/custreg',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../views','/custreg.html'))
// })

// router.get('/employeereg',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../views','/employeereg.html'))
// })

// router.get('/admin', async(req, res) => {
//     var userlist = await Employee.find()
//     res.render('admin', {employees:userlist})
// })

// router.get('/supervisor', async(req, res) => {
//     var userlist = await Customer.find()
//     res.render('supervisor',{customers:userlist})
// })

// //Delete Route Code
router.post("/delete", async (req, res) => {
  try {
    await farmerOne.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("unable to delete from database");
  }
});

// Update data in form
router.get("/update/:id", async (req, res) => {
  try {
    const updateUser = await farmerOne.findOne({ _id: req.params.id });
    res.render("farmerOneUpdateList", { user: updateUser });
  } catch (err) {
    res.status(400).send("Unable to find item in the database");
  }
});

router.post("/update", async (req, res) => {
  try {
    await farmerOne.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("FOList");
  } catch (err) {
    res.status(404).send("Unable to update item in the database");
  }
});

// router.post('/updating', async(req, res) => {
//      try {
//         const userItem = await Customer.findById(req.body.id)
//         res.render('userUpdate', { user: userItem })
//      }
//      catch{
//         res.status(500).send("unable to find item in the database");
//      }
//  })

// //update
// router.post("/update", async (req, res) => {
//     try {
//        const updateduser = await Customer.findOneAndUpdate({ firstname: req.body.firstname},req.body)
//        res.redirect('/supervisor')
//     } catch (error) {
//        res.status(400).send("unable to update to database");
//     }
//   })

// //Delete Route Code
// router.post("/deletee", async (req, res) => {
//     try {
//       await Employee.deleteOne({ _id: req.body.id })
//       res.redirect('back')
//     } catch (error) {
//        res.status(400).send("unable to delete from database");
//     }
//   })

//   router.post('/updatings', async(req, res) => {
//        try {
//           const userItem = await Employee.findById(req.body.id)
//           res.render('employeeUpdate', { user: userItem })
//        }
//        catch{
//           res.status(500).send("unable to find item in the database");
//        }
//    })

// //update
// router.post("/updates", async (req, res) => {
//     try {
//        const updateduser = await Employee.findOneAndUpdate({ firstname: req.body.firstname},req.body)
//        updateuser.save()
//        res.redirect('/admin')
//     } catch (error) {
//        //res.status(400).send("unable to update to database");
//        res.status(400).redirect('/admin');
//     }
//   });

module.exports = router;
