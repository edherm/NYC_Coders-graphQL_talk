import { Types } from 'mongoose';
import DataLoader from 'dataloader';
import Dog from '../models/Dog';
import Human from '../models/Human';

const loadDogs = async (humanIds) => {
	// create MongoDB ObjectIds to query with
	const formattedIds = humanIds.map((id) => new Types.ObjectId(id));
	// find the dogs from the human ids
	const dogs = await Dog.find({ human: { $in: formattedIds } });

	// We return a new array of arrays, which is the human ids
	// array mapped to each humans dog collections
	const mapped = humanIds.map((id) => dogs.filter((dog) => String(dog.human) === String(id)));
	return mapped;
};

const loadHumans = async (humanIds) => {
	const formattedIds = humanIds.map((id) => new Types.ObjectId(id));
	const humans = await Human.find({ _id: formattedIds });
	return humanIds.map((id) => humans.find((human) => String(human._id) === String(id)));
};

const makeDataLoaders = () => ({
	dogs: new DataLoader(loadDogs),
	humans: new DataLoader(loadHumans),
});

export default makeDataLoaders;
