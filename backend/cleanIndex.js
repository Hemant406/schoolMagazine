import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* ---------- MongoDB Connection ---------- */

const MONGODB_URI = "mongodb://127.0.0.1:27017/SchoolDB";

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log("✅ MongoDB Connected");
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

/* ---------- School Schema ---------- */

const SchoolSchema = new mongoose.Schema({

  id:Number,
  sscode:Number,

  DistrictID:Number,
  DistrictName:String,

  TalukaID:Number,
  TalukaName:String,

  VillageID:Number,
  VillageName:String,

  schoolname:String,
  city_village_id:Number,
  school_email:String,
  no_of_student:Number

},{ collection:"studMag" });

const School = mongoose.model("School", SchoolSchema);

/* ---------- Organization Schema ---------- */

const OrganizationSchema = new mongoose.Schema({

  name:String,
  email:String,
  password:String,
  schoolSSCCode:Number

});

const Organization = mongoose.model("Organization", OrganizationSchema);

/* ---------- Get SSC Codes for Dropdown ---------- */

app.get("/api/schools", async (req,res)=>{

  try{

    const schools = await School.find(
      {},
      { sscode:1, schoolname:1, _id:0 }
    );

    res.json(schools);

  }

  catch(err){

    console.error(err);
    res.status(500).json({error:"Failed to fetch schools"});

  }

});

/* ---------- Get School Details ---------- */

app.get("/api/school/:sscCode", async (req,res)=>{

  try{

    const { sscCode } = req.params;

    const school = await School.findOne({
      sscode: Number(sscCode)
    });

    if(!school){

      return res.status(404).json({error:"School not found"});

    }

    res.json(school);

  }

  catch(err){

    console.error(err);
    res.status(500).json({error:"Server error"});

  }

});

/* ---------- Register Organization ---------- */

app.post("/api/organization/register", async (req,res)=>{

  try{

    const { name,email,password,schoolSSCCode } = req.body;

    const school = await School.findOne({
      sscode:Number(schoolSSCCode)
    });

    if(!school){

      return res.status(400).json({error:"Invalid SSC code"});

    }

    const org = new Organization({

      name,
      email,
      password,
      schoolSSCCode:Number(schoolSSCCode)

    });

    await org.save();

    res.status(201).json(org);

  }

  catch(err){

    console.error(err);
    res.status(500).json({error:"Registration failed"});

  }

});

/* ---------- Server ---------- */

app.listen(PORT, ()=>{

  console.log(`🚀 Server running on port ${PORT}`);

});