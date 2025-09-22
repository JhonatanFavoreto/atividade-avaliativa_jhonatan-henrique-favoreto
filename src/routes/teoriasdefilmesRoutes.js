import express from "express";
import { getAllTeoriasdefilmes, getTeoriasdefilmesByld, createTeoriasdefilmes, deleteTeoria } from "../controllers/teoriasdefilmesController.js";

const router = express.Router();
router.get("/", getAllTeoriasdefilmes);
router.get("/:id", getTeoriasdefilmesByld);
router.post("/", createTeoriasdefilmes);
router.delete("/:id", deleteTeoria);

export default router;