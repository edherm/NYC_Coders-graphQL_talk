import Dog from '../models/Dog';

export default {
	async dogs(parent) {
		const dogs = await Dog.find({ human: parent });
		return dogs;
	},

	// ? Example using dataloader
	// async dogs(parent, args, ctx) {
	// 	// load the human id into the dog dataloader
	// 	return Promise.resolve(ctx.dataLoaders.dogs.load(parent._id));
	// },
};
