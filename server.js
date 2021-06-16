const app = require("./app.js")
const dotenv = require('dotenv')

dotenv.config();
const PORT = process.env.PORT || 3003;




app.listen(PORT, () => console.log("Listening on port:", PORT));
