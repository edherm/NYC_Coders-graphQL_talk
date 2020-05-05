import { model, Schema } from 'mongoose';

const humanSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Give your human a name 💁🏽‍♂️',
	},
});

humanSchema.pre('findOne', () => {
	console.log('Ran a findOne Human query.');
});

humanSchema.pre('find', () => {
	console.log('Ran a find Human query.');
});

export default model('Human', humanSchema);
