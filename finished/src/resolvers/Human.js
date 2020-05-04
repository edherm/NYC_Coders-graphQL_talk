export default {
	async dogs(parent, args, ctx) {
		// load the human id into the dog dataloader
		return Promise.resolve(ctx.dataLoaders.dogs.load(parent._id));
	},
	// async dogs(parent, args, ctx) {
	// 	const dogs = await ctx.dogs.find({ human: parent });
	// 	return dogs;
	// },
};
