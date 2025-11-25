
import TopHeader from "../components/header/TopHeader"
import HomePage from "../pages/HomePage"

export const routes = [
  {
    path: "/",
    element: <TopHeader />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ],
  },
];


// export const routes = [
//   {
//     path: "/",
//     element: <TopHeader />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/UserListComponent",
//         element: <UserListComponent />,
//       }
//     ],
//   },
// ];


// export const routes = [
//   {
//     path: "/",
//     element: <BarChart />,
//   },
//   {
//     path: "/BarChart",
//     element: <BarChart />,
//   },
//   {
//     path: "/modal",
//     element: <MYTask />,
//   }
//     // children: [
//     //   {
//     //     index: true,
//     //     element: <HomePage />,
//     //   },
//     //   {
//     //     path: "/BarChart",
//     //     element: <BarChart />,
//     //   },
//     //   {
//     //     path: "/NewsRoom",
//     //     element: <NewsRoom />,
//     //   },
//     //   {
//     //     path: "/Rough",
//     //     element: <RoughWork />,
//     //   },
//     //   {
//     //     path: "/Dashboard",
//     //     element: <Dashboard />,
//     //   },
//     //   {
//     //     path: "/AddNewsPage",
//     //     element: <AddNewsPage />,
//     //   },
//     // ],
  
// ];

