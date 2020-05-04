import { gql } from 'apollo-server';

const typeDefs = gql`
	type Human {
		id: ID!
		name: String!
		dogs: [Dog]!
	}

	input HumanInput {
		id: ID
		name: String
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
		dogsWhere(id: ID, name: String, breed: String): [Dog]!
		dogWhereID(id: ID!): Dog
	}

	type Mutation {
		createHuman(name: String!): Human 
		createDog(name: String!, breed: String!, human: HumanInput): Dog
		updateDog(id: ID!, name: String, breed: String, human: HumanInput): Dog
		deleteDog(id: ID): Dog
	}
`;

export default typeDefs;
