import { Router } from "express";
const router = Router();
router.get("/", (req, res, next) => {
    res.send("This works!");
});
export default router;
