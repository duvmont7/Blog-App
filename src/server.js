//configurar dotenv
require('dotenv').config();

//importar el app
const app = require('./app');
const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('Database authenticated✅'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database synced✅'))
  .catch(() => console.log(err));

//metodo listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}📚`);
});
