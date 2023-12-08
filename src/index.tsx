import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ToDoList from './components/ToDoList/ToDoList';
import Counter from './components/Counter/Counter';
import UserProfile from './components/User/UserProfile';
import UserProfileList from './components/User/UserProfileList';
import ProductsList from './components/Products/ProductsList';
import MoviesHome from './components/Movies/MoviesHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "todo",
        element: <ToDoList />
      },
      {
        path: "counter",
        element: <Counter/>
      },
      {
        path: "user-profile",
        element: <UserProfileList/>,
      },
      {
        path: "user-profile/:id",
        element: <UserProfile/>,
      },
      {
        path: "products",
        element: <ProductsList/>
      },
      {
        path: "movies",
        element: <MoviesHome/>
      }


    ]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
