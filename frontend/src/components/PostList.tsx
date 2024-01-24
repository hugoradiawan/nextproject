import { useState } from "react";
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

  function addPosthandler(postData: Post): void {
    setPosts(prevPosts => [postData, ...prevPosts]);
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
      {posts.length > 0 ? (
        (
          <ul className={classes.posts}>
            {posts.map((post) => (
                <Post key={post.body} author={post.author} body={post.body} />
              ))}
          </ul>
        )
      ) : null}
      {posts.length === 0 && (
      <div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Start adding some!</p>
      </div>
      )}
    </>
  );
}
