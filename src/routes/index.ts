import Express from "express";
import userRoutes from './userRoutes';
import homeRoutes from "./homeRoutes";

const router = Express.Router();

router.use('/users', userRoutes);
router.use("/index", homeRoutes);

export default router;