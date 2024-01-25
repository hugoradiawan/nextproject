import { Post } from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

export function PostList(): JSX.Element {
  const res: PostResponse = useLoaderData() as PostResponse;
  return (
    <>
      {res.posts.length > 0 ? (
        (
          <ul className={classes.posts}>
            {res.posts.map((post) => (
                <Post key={post.body} author={post.author} body={post.body} />
              ))}
          </ul>
        )
      ) : null}
      {res.posts.length === 0 && (
      <div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Start adding some!</p>
      </div>
      )}
    </>
  );
}
