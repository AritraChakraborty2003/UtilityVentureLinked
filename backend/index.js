import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import fs from "fs";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("uploads"));
app.use(cors());
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
const fileConfig = new mongoose.Schema(
  {
    rid: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { collection: "Files" }
);

const reportConfig = new mongoose.Schema(
  {
    fid: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Reports",
  }
);
mongoose.connect(`${process.env.MONGODB_URI}`);
const reports1 = mongoose.model("Reports", reportConfig);
const files = mongoose.model("Files", fileConfig);
app.get("/", (req, res) => {
  const obj = [
    {
      name: "Hello",
    },
  ];
  res.end(JSON.stringify(obj));
});

app.get("/reportsAPI/:id", (req, res) => {
  const query = req.query;

  const reply = query.hasOwnProperty(":89$67@$2024");

  if (reply) {
    reports1
      .find()
      .then((report) => {
        res.json(report);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const obj = [
      {
        error: "Invalid API Key",
      },
    ];
    res.end(JSON.stringify(obj));
  }
});
app.post("/filesAPI", upload.single("file"), (req, res) => {
  let rid = req.body.rid;
  let type = req.body.name;
  let image = req.file.filename;
  let NewFile = new files({ rid: rid, type: type, image: image });
  NewFile.save();
});
app.get("/filesAPI", (req, res) => {
  files
    .find()
    .then((file) => {
      res.json(file);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen("8000", (req, res) => {
  console.log("Backend connected");
});
