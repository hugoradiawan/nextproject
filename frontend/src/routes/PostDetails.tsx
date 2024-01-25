import { Link, useLoaderData } from 'react-router-dom';
import { Modal } from '../components/Modal';
import classes from './PostDetails.module.css';

export function PostDetails(): JSX.Element {
    const post: Post = useLoaderData() as Post;

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunely, the requested post could not be found</p>
                    <p>
                        <Link to='..' className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    );
}
