import './tailwind.css';
import { Route, Routes } from 'react-router-dom';
// import MainLayout from './pertemuan-5/layouts/MainLayout';
// import AuthLayout from './pertemuan-5/layouts/AuthLayouts';
// import Login from './pertemuan-5/pages/Auth/Login';
// import Register from './pertemuan-5/pages/Auth/Register';
// import Forgot from './pertemuan-5/pages/Auth/Forgot';
// import Dashboard from './pertemuan-5/pages/Dashboard';
// import Orders from './pertemuan-5/pages/Orders';
// import Customers from './pertemuan-5/pages/Customer';
// import ErrorPage from './pertemuan-5/pages/ErrorPage';
import React, { Suspense } from 'react';
import Loading from './pertemuan-5/components/Loading';
import ErrorLayouts from './pertemuan-5/layouts/ErrorLayouts';
import User from './pertemuan-5/pages/User';
import NavigationBar from './pertemuan-5/components/guest/NavigationBar';
import GuestLayout from './pertemuan-5/layouts/GuestLayout';
import Home from './pertemuan-5/pages/guest/Home';
import AboutUs from './pertemuan-5/pages/guest/AbousUs';
import Testimonial from './pertemuan-5/pages/guest/Testimonial';
import TopProduk from './pertemuan-5/pages/guest/TopProduk';
import OrdersQuiz from './pertemuan-5/pages/guest/Orders';

const Dashboard = React.lazy(() => import("./pertemuan-5/pages/Dashboard"))
const Orders = React.lazy(() => import("./pertemuan-5/pages/Orders"))
const Customers = React.lazy(() => import("./pertemuan-5/pages/Customer"))
const ErrorPage = React.lazy(() => import("./pertemuan-5/pages/ErrorPage"))
const MainLayout = React.lazy(() => import("./pertemuan-5/layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./pertemuan-5/layouts/AuthLayouts"))
const Login = React.lazy(() => import("./pertemuan-5/pages/Auth/Login"))
const Register = React.lazy(() => import("./pertemuan-5/pages/Auth/Register"))
const Forgot = React.lazy(() => import("./pertemuan-5/pages/Auth/Forgot"))
const Products = React.lazy(() => import("./pertemuan-5/pages/Products"))

function App() {

  return (
    // <div>
    //   <Routes>
    //     <Route element={<GuestLayout/>}>
    //     <Route path="/" element={<Home/>} />
    //         <Route path="/aboutus" element={<AboutUs/>} />
    //         <Route path="/testimoni" element={<Testimonial/>} />
    //         <Route path="/produk" element={<TopProduk/>} />
    //         <Route path="/orders" element={<OrdersQuiz/>} />
    //     </Route>
    //   </Routes>
    // </div>
            <Suspense fallback={<Loading/>}>
              <Routes>
                <Route element={<MainLayout/>}>
                  <Route path="/dashboard" element={<Dashboard/>} />
                  <Route path="/orders" element={<Orders/>} />
                  <Route path="/customers" element={<Customers/>} />
                  <Route path="/user" element={<User/>} />
                  <Route path="/products" element={<Products />} />
                </Route>
                <Route element={<ErrorLayouts/>}>
                  <Route path="*" element={<ErrorPage code="404"/>} />
                  <Route path="/400" element={<ErrorPage code="400"/>} />
                  <Route path="/401" element={<ErrorPage code="401"/>} />
                  <Route path="/403" element={<ErrorPage code="403"/>} />
                </Route>
                <Route element={<GuestLayout/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/testimoni" element={<Testimonial/>} />
                    <Route path="/produk" element={<TopProduk/>} />
                    <Route path="/orders2" element={<OrdersQuiz/>} />
                </Route>
                <Route element={<AuthLayout/>}> 
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot" element={<Forgot/>}/>
                </Route>
              </Routes>
            </Suspense>
  )
}

export default App
