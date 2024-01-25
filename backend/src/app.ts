import bodyParser from "body-parser";
import express, { Express } from "express";
import { Post, getStoredPosts, storePosts } from "./data/post";

const app: Express = express();

app.use(bodyParser.json());

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "Get,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/posts', async (_, res) => {
    const storedPosts = await getStoredPosts();
    res.json({posts: storedPosts});
});

app.get('/posts/:id', async (req, res) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((p) => p.id === req.params.id);
    if (post) {
        res.json({post});
    } else {
        res.status(404).json({message: 'Post not found'});
    }
});

app.post('/posts', async (req, res) => {
    const storedPosts = await getStoredPosts();
    const newPost = {
        id: Math.random().toString(36).slice(2, 9),
        body: req.body.body,
        author: req.body.author
    } as Post;
    storedPosts.push(newPost);
    await storePosts(storedPosts);
    res.status(201).json({message: 'Stored new post', post: newPost});
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});