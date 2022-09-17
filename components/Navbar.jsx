import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div
        class="d-flex justify-content-center gap-5 fw-bold my-4 "
        style={{ color: "navy" }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/exp">
          <a>Experience</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link>
      </div>
    </div>
  );
}
