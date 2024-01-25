interface Post {
    id?: string;
    body: string;
    author: string;
}

interface PostResponse {
    posts: Post[];
}