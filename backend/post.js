import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    author: {type: String, req: true},
    title: {type: String, req: true},
    content: {type: String, req: true},
    picture: {type: String}
})

export default mongoose.model('Post', Post)