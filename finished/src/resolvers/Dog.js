// import { Types } from 'mongoose';

export default {
	async human(parent, args, ctx) {
		// if there is no human, return null
		if (!parent.human) return null;

		// if we already have the human, return them
		if (parent.human.name && parent.human._id) return parent.human;

		// otherwise, load the human id into the human dataloader
		return Promise.resolve(ctx.dataLoaders.humans.load(parent.human));
	},
	// async human(parent, args, ctx) {
	// 	if (!parent.human) return null;

	// 	const human = await ctx.humans.findById(parent.human);
	// 	return human;
	// },
};
