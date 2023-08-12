import express from "express";

const app = express();

app.get("/", (request: any, respone: any) => {
  console.log("hello from express");
  respone.status(200);
  respone.json({ message: "hello" });
});
export default app;
