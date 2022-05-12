const { Book, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context) => {
      const foundUser = await User.findOne({
        _id: context.user._id,
      });
      return foundUser;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!User) {
        throw new AuthenticationError("Can't find this user.");
      }
      const correctPw = await User.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("Wrong password");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { savedBook }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBook: body } },
        { new: true, runValidators: true }
      );
      return { updatedUser };
    },
    deleteBook: async (parent, args, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw new AuthenticationError("Couldn't find user with this id!");
      }
      return { updatedUser };
    },
  },
};
module.exports = resolvers;
