const getAllProductsStatic = async (req, res, next) => {
  res.status(200).json({ msg: "product testing router" });
};

const getAllProducts = async (req, res, next) => {
  res.status(200).json({ msg: "product router" });
};

module.exports = { getAllProductsStatic, getAllProducts };
