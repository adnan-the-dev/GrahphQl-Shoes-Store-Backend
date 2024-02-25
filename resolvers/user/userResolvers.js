const User = require("../../modles/User");

const userResolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (e) {
        throw new Error("User" + e.message);
      }
    },
  },

  Mutation: {
    // register user
    register: async (
      _,
      {
        username,
        password,
        email,
        isAdmin,
        street,
        city,
        state,
        country,
        postalCode,
      }
    ) => {
      try {
        const salt = await bcypt.genSalt(10);
        const bcryptPssword = await bcypt.hash(password, salt);
        const user = new User({
          username: username,
          password: bcryptPssword,
          email: email,
          isAdmin: isAdmin,
          street: street,
          city: city,
          state: state,
          country: country,
          postalCode: postalCode,
        });
        const saveUser = await user.save();
        return saveUser;
      } catch (e) {
        throw new Error({
          message: e.message || "some error ecured",
        });
      }
    },
  },
  // loginUser user
  loginUser: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("This email doesn't exist.");
      }

      const UserPassword = await bcypt.compare(password, user.password);
      if (!UserPassword) {
        throw new Error("The password provided is incorrect.");
      }
    } catch (e) {
      throw new Error({
        message: e.message || "some error ecured",
      });
    }
  },
};

module.exports = userResolvers;
