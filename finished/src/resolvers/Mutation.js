import { Types } from 'mongoose';

export default {
	async createHuman(parent, args, ctx) {
		const human = await ctx.humans.create({ name: args.name });
		return human;
	},

	async createDog(parent, args, ctx) {
		const { name, breed } = args;
		let human = null;

		if (args.human) {
			human = await ctx.humans.findOne(args.human);
		}

		const dog = await ctx.dogs.create({ name, breed, human });
		return dog;
	},

	async updateDog(parent, args, ctx) {
		const id = new Types.ObjectId(args.id);
		let human = null;

		if (args.human) {
			const humanId = new Types.ObjectId(args.human.id);

			human = await ctx.humans.findOne({
				$or: [
					{ name: args.human.name },
					{ _id: humanId },
				],
			});
		}

		const updateOptions = { ...args };
		delete updateOptions.human;
		delete updateOptions.id;

		if (human) {
			updateOptions.human = human;
		}

		const dog = await ctx.dogs.findOneAndUpdate({ _id: id }, updateOptions, { new: true });
		return dog;
	},

	async deleteDog(parent, args, ctx) {
		const id = new Types.ObjectId(args.id);
		const dog = await ctx.dogs.findByIdAndDelete(id);
		return dog;
	},
};
