import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const User = mongoose.model("User");

const AddiasProduct = mongoose.model("AddiasProduct");

const Orders = mongoose.model("Orders");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("User not found: " + error.message);
      }
    },
    allShoesProduct: async () => {
      const product = await AddiasProduct.find();
      return product;
    },

    singleProduct: async (_, { _id }) => {
      try {
        const product = await AddiasProduct.findById({ _id: _id });
        return product;
      } catch (e) {
        throw new Error("Products not found." + e.message);
      }
    },

    // getAllOrders

    allOrders: async () => {
      const order = await Orders.find();
      return order;
    },
  },

  Mutation: {
    singUpUser: async (_, { userNew }) => {
      // try {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User already exists with email");
      }
      const salt = await bcrypt.genSalt(10);
      const bcryptPssword = await bcrypt.hash(userNew.password, salt);
      const newUser = new User({
        ...userNew,
        password: bcryptPssword,
      });

      return await newUser.save();

      // } catch (e) {
      //   throw new Error({
      //     message: e.message || "some error ecured",
      //   });
      // }
    },
    loginUser: async (_, { userLogin }) => {
      const user = await User.findOne({ email: userLogin.email });
      if (!user) {
        throw new Error("This email doesn't exist.");
      }
      const UserPassword = await bcrypt.compare(
        userLogin.password,
        user.password
      );
      if (!UserPassword) {
        throw new Error("The password provided is incorrect.");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token };
    },
  },
};

export default resolvers;
