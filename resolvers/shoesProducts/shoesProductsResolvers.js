const AddiasProduct = require("../../modles/ShoesProducts");

const shoesProductsResolvers = {
  Query: {
    AllAddiasProduct: async () => {
      const allProducts = AddiasProduct.find();
      return allProducts;
    },
  },
  Mutation: {
    singleaddiasProduct: async (_, { _id }) => {
      try {
        const product = await AddiasProduct.findById({ _id });
        return product;
      } catch (e) {
        throw new Error("Products not found.");
      }
    },
  },
};

module.exports = shoesProductsResolvers;
