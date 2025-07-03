import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';   // ✅ Make sure this path is correct
import About from './Components/About/About.jsx';
import User from './Components/User/User.jsx';
import Contact from './Components/Contact/Contact.jsx'; 
import Github, { githubLoader } from './Components/Github/Github.jsx';

// ✅ Only one default (index) route per path
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,           // 👈 Shorthand for path: ""
//         element: <Home />
//       },
//       {
//         path: 'about',         // 👈 This becomes "/about"
//         element: <About />
//       },
//       {
//         path: 'Contact',         // 👈 This becomes "/about"
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
  path="/"
  element={<Layout />}
  errorElement={<h1>Something went wrong!</h1>}
>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
  <Route path="user/:userId" element={<User/>} /> 
  <Route loader={githubLoader} path="github" element={<Github/>} />
  <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Catch-all */}
 </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
