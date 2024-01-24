import { readFile, writeFile } from 'fs/promises';

export async function getStoredPosts(): Promise<Post[]> {
    const rawFileContent = await readFile('src/data/posts.json', 'utf-8');
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
}

export function storePosts(posts) {
    return writeFile('src/data/posts.json', JSON.stringify({ posts: posts || [] }));
}