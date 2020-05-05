import { Types } from 'mongoose';
import Dog from '../models/Dog';
import Human from '../models/Human';

export default {
	async createHuman(parent, args) {
		const human = await Human.create({ name: args.name });
		return human;
	},

	async createDog(parent, { name, breed, human }) {
		let humanId;
		if (human) {
			humanId = new Types.ObjectId(human.id);
		}

		const dog = await Dog.create({ name, breed, human: humanId });
		return dog;
	},

	async updateDog(parent, {
		id, human, name, breed,
	}) {
		const updateOptions = {};
		if (name) updateOptions.name = name;
		if (breed) updateOptions.breed = breed;
		if (human) {
			updateOptions.human = new Types.ObjectId(human.id);
		}

		const dogId = new Types.ObjectId(id);
		const dog = await Dog.findOneAndUpdate({ _id: dogId }, updateOptions, { new: true });
		return dog;
	},

	async deleteDog(parent, args) {
		const id = new Types.ObjectId(args.id);
		const dog = await Dog.findByIdAndDelete(id);
		return dog;
	},
};
