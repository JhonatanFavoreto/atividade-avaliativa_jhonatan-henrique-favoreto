import express from "express";
import { getAllTeoriasdefilmes, getTeoriasdefilmesByld } from "../controllers/teoriasdefilmesController.js";

const router = express.Router();
router.get("/", getAllTeoriasdefilmes);
router.get("/:id", getTeoriasdefilmesByld);

export default router;