/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";
import auth from "@/api/auth";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  if (auth.getToken()) {
    next();
  } else {
    alert("You cannot see more until you log in");
    next({ name: "login" });
  }
};

export default haveRoleGuard;
