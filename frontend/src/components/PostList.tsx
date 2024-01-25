import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList({
  isPosting,
  onStopPosting,
}: Readonly<{ isPosting: boolean; onStopPosting: () => void }>): JSX.Element {
  let modalContent: JSX.Element | null = null;
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  function addPosthandler(postData: Post): void {
    fetch('https://expert-space-winner-rp4g7gxg76vfxw5q-8080.app.github.dev/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts(prevPosts => [postData, ...prevPosts]);
  }

  async function fetchPosts(): Promise<void> {
    setIsFetching(true);
    const res: Response = await fetch('https://expert-space-winner-rp4g7gxg76vfxw5q-8080.app.github.dev/posts');
    const data: PostResponse = await res.json();
    setPosts(data.posts);
    setIsFetching(false);
  }

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPosthandler}/>
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {!isFetching && posts.length > 0 ? (
        (
          <ul className={classes.posts}>
            {posts.map((post) => (
                <Post key={post.body} author={post.author} body={post.body} />
              ))}
          </ul>
        )
      ) : null}
      {!isFetching && posts.length === 0 && (
      <div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Start adding some!</p>
      </div>
      )}
      {isFetching && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}
