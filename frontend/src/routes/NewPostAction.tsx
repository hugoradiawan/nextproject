import { redirect } from "react-router-dom";

export async function action({request}: {request: Request}): Promise<Response> {
    const formData = await request.formData();
    const formObject = Object.fromEntries(formData);
    const postData = {
      body: formObject.body,
      author: formObject.author,
    } as Post;
    await fetch('https://expert-space-winner-rp4g7gxg76vfxw5q-8080.app.github.dev/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    return redirect('/');
}