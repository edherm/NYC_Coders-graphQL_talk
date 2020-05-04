import { Types } from 'mongoose';
import Dog from '../models/Dog';
import Human from '../models/Human';

export default {
	async allDogs() {
		const dogs = await Dog.find({});
		return dogs;
	},

	async dogsWhere(parent, args) {
		const { name, breed } = args;
		const id = new Types.ObjectId(args.id);

		const dogs = await Dog.find({
			$or: [
				{ name },
				{ breed },
				{ _id: id },
			],
		});
		return dogs;
	},

	async dogWhereID(parent, args) {
		const id = new Types.ObjectId(args.id);
		const dog = await Dog.findOne({ _id: id });
		return dog;
	},

	async allHumans() {
		const humans = await Human.find({});
		return humans;
	},
};
