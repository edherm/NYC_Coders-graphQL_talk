import Human from '../models/Human';

export default {
	async human(parent) {
		if (!parent.human) return null;
		const human = await Human.findById(parent.human);
		return human;
	},

	// Example using Dataloader
	// async human(parent, args, ctx) {
	// 	// if there is no human, return null
	// 	if (!parent.human) return null;

	// 	// otherwise, load the human id into the human dataloader
	// 	return Promise.resolve(ctx.dataLoaders.humans.load(parent.human));
	// },
};
