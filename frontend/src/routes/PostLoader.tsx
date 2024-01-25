export async function loader(): Promise<PostResponse> {
    const res: Response = await fetch('https://expert-space-winner-rp4g7gxg76vfxw5q-8080.app.github.dev/posts');
    const data: PostResponse = await res.json();
    return data;
}