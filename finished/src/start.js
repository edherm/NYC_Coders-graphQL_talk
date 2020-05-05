import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Dog from './resolvers/Dog';
import Human from './resolvers/Human';
import makeDataLoaders from './lib/makeDataLoaders';

// import environmental variables from our variables.env file
dotenv.config();

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.MONGODB_URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

mongoose.connection.on('error', (err) => {
	console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Start our app
const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Mutation,
		Dog,
		Human,
	},
	context: () => ({
		dataLoaders: makeDataLoaders(),
	}),
});

server.listen(7788).then(() => {
	console.log('✨🐶✨Doggie API running → PORT 7788 ✨🐶✨');
});
