import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { NewPost } from './routes/NewPost';
import { Posts } from './routes/Posts';
import { loader as postLoader } from './routes/PostLoader';
import { RootLayout } from './routes/RootLayout';
import { action as newPostAction } from './routes/NewPostAction';
import { PostDetails } from './routes/PostDetails';
import { loader as postDetailLoader } from './routes/postDetailsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/',
        element: <Posts/>,
        loader: postLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost/>,
            action: newPostAction,
          },
          {
            path: '/:id',
            element: <PostDetails/>,
            loader: postDetailLoader,
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
