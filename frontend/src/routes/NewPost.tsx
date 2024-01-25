import classes from "./NewPost.module.css";
import { Modal } from "../components/Modal";
import { Link, Form } from "react-router-dom";

export function NewPost(): JSX.Element {
  return (
    <Modal>
      <Form method="post" className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to='..' type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

