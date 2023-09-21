"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
  console.log({ segment });
  console.log({ href, active });
  //   console.log({ children });
  //   console.log({ href, segment });
  return (
    <Link
      className={
        active ? "text-decoration-none border-bottom" : "text-decoration-none"
      }
      href={href}
    >
      {children}
    </Link>
  );
}
