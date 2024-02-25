import { mergeResolvers } from "@graphql-tools/merge";
import shoesProductsResolvers from "./shoesProducts/shoesProductsResolvers";
import userResolvers from "./user/userResolvers";

const resolvers = mergeResolvers([shoesProductsResolvers, userResolvers]);

module.exports = resolvers;
