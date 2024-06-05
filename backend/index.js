import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
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
app.get("/", (req, res) => {
  const obj = [
    {
      name: "Hello",
    },
  ];
  res.end(JSON.stringify(obj));
});
/*
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
*/
app.listen("8000", (req, res) => {
  console.log("Backend connected");
});
