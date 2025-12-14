import express from "express";
import {
  handleGenerateNewShortURL,
  handleAnalytics,
} from "../controller/url.js";

const router = express.Router();

router.route("/").post(handleGenerateNewShortURL);
router.route("/analytics/:shortId").get(handleAnalytics);

export default router;
