import server from "bunrest";
import { printReceipt, statusConnection } from "../controllers/index.controller";

const app = server()
const router = app.router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello printer server ESC/POS' });
})
router.get('/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to api v1' });
})
router.post('/api/print', printReceipt);
router.get("/api/print/status", statusConnection);

export default router
