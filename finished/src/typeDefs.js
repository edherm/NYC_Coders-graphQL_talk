import { gql } from 'apollo-server';

const typeDefs = gql`
	type Human {
		id: ID!
		name: String!
		dogs: [Dog]!
	}

	input HumanInput {
		id: ID
	}

	type Dog {
		id: ID!
		name: String!
		breed: String!
		human: Human
	}

	type Query {
		allHumans: [Human]!
		allDogs: [Dog]!
		dogWhereId(id: ID!): Dog
		dogsWhere(name: String, breed: String): [Dog]!
	}

	type Mutation {
		createHuman(name: String!): Human 
		createDog(name: String!, breed: String!, human: HumanInput): Dog
		updateDog(id: ID!, name: String, breed: String, human: HumanInput): Dog
		deleteDog(id: ID): Dog
	}
`;

export default typeDefs;
