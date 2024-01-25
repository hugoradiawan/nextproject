import { PostList } from "../components/PostList";
import { Outlet } from "react-router-dom";

export function Posts(): JSX.Element {
  return (
    <>
      <Outlet/>
      <main>
        <PostList/>
      </main>
    </>
  );
}
