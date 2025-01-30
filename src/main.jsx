import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoonSection from "./destination/moon/MoonSection.jsx";
import EuropaSection from "./destination/europa/EuropaSection.jsx";
import MarsSection from "./destination/mars/MarsSection.jsx";
import TitanSection from "./destination/titan/TitanSection.jsx";
import CrewMain from "./crew/crew1/CrewMain.jsx";
import MainSection from "./crew/crew2/MainSection.jsx";
import Crew3Seaction from "./crew/crew3/Crew3Seaction.jsx";
import Crew4 from "./crew/crew4/crew4.jsx";
import TechMain from "./technology/tech1/TechMain.jsx";
import Tech2Main from "./technology/tech2/Tech2Main.jsx";
import Tech3Main from "./technology/tech3/Tech3Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Destination/europa",
    element: <EuropaSection />,
  },
  {
    path: "/Destination/moon",
    element: <MoonSection />,
  },
  {
    path: "/Destination/mars",
    element: <MarsSection />,
  },
  {
    path: "/Destination/Titan",
    element: <TitanSection />,
  },
  {
    path: "/crew/commander",
    element: < CrewMain/>,
  },
  {
    path: "/crew/specialist",
    element: < MainSection/>
  },
  {
    path: "/crew/pilot",
    element: < Crew3Seaction/>
  },
  {
    path: "/crew/flight_engineer",
    element: < Crew4 />
  },
  {
    path: "/technology/launch_vehicle",
    element: < TechMain />
  },
  {
    path: "/technology/spaceport",
    element: < Tech2Main />
  },
  {
    path: "/technology/space_capsule",
    element: < Tech3Main />
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
