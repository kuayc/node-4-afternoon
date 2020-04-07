let swag = require("../models/swag");

let search = (req, res) => {
  const { category } = req.query;
  if (!category) {
    res.status(200).send(swag);
  } else {
    const filteredSwag = swag.filter((swag) => swag.category === category);
    res.status(200).send(filteredSwag);
  }
};

module.exports = {
  search,
};
