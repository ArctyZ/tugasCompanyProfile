"use client";
import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      isBordered
      maxWidth="full"
      className="flex w-full justify-between bg-black/60"
    >
      <NavbarBrand>
        <h1 className="text-2xl font-bold text-white"><Link href="/">PC Garrage</Link></h1>
      </NavbarBrand>
      <NavbarContent className="hidden gap-5 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/" className="text-xl text-white" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-xl text-white">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/services" className="text-xl text-white">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/teams" className="text-xl text-white">
            Teams
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="bg-black/50">
        <NavbarMenuItem>
          <Link href="/" className="w-full text-lg text-white">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/about" className="w-full text-lg text-white">
            About Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/services" className="w-full text-lg text-white">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/teams" className="w-full text-lg text-white">
            Teams
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
