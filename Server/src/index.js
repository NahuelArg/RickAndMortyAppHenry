const server= require("./app");
const PORT= 3001;
const { conn } = require('./DB_connection');



server.listen(PORT, ()=>{
    console.log( "Server raise in port: " +PORT);
})
async function syncDatabase() {
    try {
      // Sincroniza Sequelize con la base de datos
      await conn.sync({ force: true });
      console.log('Sequelize synchronized with database successfully!');
    } catch (error) {
      console.error('Error syncing Sequelize with database:', error);
    }
  }
syncDatabase()