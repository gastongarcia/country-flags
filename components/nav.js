import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <div className="border p-3 bg-white">
      <Link href="/">
        <a className="nav-item">Home</a>
      </Link>
      <Link href="/all-flags">
        <a className="nav-item">All Flags</a>
      </Link>
    </div>
  );
};

export default Nav;
