import { Link } from "react-router-dom";
import classes from "./Post.module.css";

export function Post({
  id,
  author,
  body,
}: Readonly<Post>): JSX.Element {
  return (
    <div className={classes.post}>
      <Link to={id!}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </div>
  );
}
