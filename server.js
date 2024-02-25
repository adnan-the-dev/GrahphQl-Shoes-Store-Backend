import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./newTypeDefs/typeDefs1.js";
import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";



// mongoo connection
// mongoose
//   .connect(MONGO_URL)
//   .then(() => {
//     console.log("succesfully connected to database");
//     server.listen(8800, () => {
//       console.log("server is running");
//     });
//   })
//   .catch((err) => {
//     console.log("an error occured", err);
//   });

const PORT = process.env.PORT || 8000;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {
  console.log("Contact to Mongodb")
})
mongoose.connection.on("err", (err) => {
  console.log("Error Contact", err)
})
// import model here

import './modles/ShoesProducts.js'
import './modles/User.js'
import './modles/placeOrder.js'

import resolvers from "./newResolvers/resolvers1.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

async function startApolloServer(server) {
  server.listen(PORT, () => {
    console.log("Server is running at port 8000...");
  })
}
startApolloServer(server)