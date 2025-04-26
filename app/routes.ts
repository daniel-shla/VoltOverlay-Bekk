import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp" ,"routes/help.tsx"),
  route("/hard", "routes/hard.tsx"),
  route("/more-info", "routes/more-info.tsx"),
] satisfies RouteConfig;
