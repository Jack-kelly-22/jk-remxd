import { Outlet } from "@remix-run/react";

export default function index() {
    return (
        <div className="bg-black text-white">
          <p>I - Web</p>
          <Outlet />
            </div>
            )
}