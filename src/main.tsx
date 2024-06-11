import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import router from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";

import { PlainLocalStorageDriver, setCacheConfigurations } from "@mongez/cache";

setCacheConfigurations({
  driver: new PlainLocalStorageDriver(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
