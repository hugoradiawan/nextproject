import classes from "./Post.module.css";

export function Post({
  author,
  body,
}: Readonly<{ author: string; body: string }>) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}
