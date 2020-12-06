import { Router } from "@vaadin/router";

const routes = [
  {
    path: "",
    component: "grid-view",
    action: async () => {
      await import("./grid-view");
    },
  },
];

export const router = new Router(document.querySelector("#outlet"));
router.setRoutes(routes);
