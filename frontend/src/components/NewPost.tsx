import { useState } from "react";
import classes from "./NewPost.module.css";

export function NewPost({
  onCancel,
  onAddPost,
}: Readonly<{
  onCancel: () => void;
  onAddPost: (postData: Post) => void;
}>): JSX.Element {
  const [enteredBody, setEnteredBody] = useState<string>("");
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setEnteredAuthor(event.target.value);
  }

  function submitHander(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const postData: Post = {
      body: enteredBody,
      author: enteredAuthor,
    } satisfies Post;
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHander}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
