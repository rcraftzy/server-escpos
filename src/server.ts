import server from "bunrest"
import router from "./routes/print.routes"
import { PORT, ENV } from "./shared/config"


// Create server
const app = server()

// Config
app.use("/", router)

// Start server.
app.listen(PORT, () => {
  console.log("  Server is running at http://localhost:%d in %s", PORT, ENV)
  console.log("  Press CTRL-C to stop\n")
})

