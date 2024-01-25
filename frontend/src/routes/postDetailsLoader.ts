import { Params } from "react-router-dom";

export async function loader({params}: {params: Params<string>}): Promise<Post> {
    const response = await fetch('https://expert-space-winner-rp4g7gxg76vfxw5q-8080.app.github.dev/posts/' + params.id);
    const resData = await response.json();
    return resData.post;
}