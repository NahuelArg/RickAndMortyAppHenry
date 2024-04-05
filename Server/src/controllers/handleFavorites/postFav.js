const { Favorite } = require("../../DB_connection");
async function postFav(req, res) {
  try {
    const { name, species, gender, id, image } = req.body;

    if (!id || !name || !image || !species || !gender) {
      res.status(401).json({ error: "Faltan datos" });
    }
    const [favChar, created] = await Favorite.findOrCreate({
      where: { id },
      defaults: {
        name,
        species,
        gender,
        image
      },
    });

    if (!created) {
      res.status(409).send({ message: message });
    }
    let allFavs = await Favorite.findAll();
    return res.status(201).json({ allFavs });
  } catch (error) {
    res.status(500).send({ message: "Error en el servidor", error: error });
  }
}
module.exports = postFav;
