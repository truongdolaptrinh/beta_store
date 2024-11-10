"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  // State to control the open/close status of each section
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Toggle function to open/close sections
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="text-5xl">
            𝕿𝕷𝖄 𝕾𝖙𝖔𝖗𝖊
          </Link>
        </div>

        {/* Shop Section with animation */}
        <div>
          <h3
            className="font-bold mb-3 cursor-pointer sm:hidden"
            onClick={() => toggleSection("shop")}
          >
            Sklep
          </h3>
          <ul
            className={`${
              openSection === "shop" ? "max-h-40" : "max-h-0"
            } overflow-hidden transition-all duration-300 ease-in-out sm:max-h-full sm:block`}
          >
            <li>
              <Link
                href="/category/new-arrivals"
                className="cursor-pointer hover:underline"
              >
                Nowości
              </Link>
            </li>
            <li>
              <Link
                href="/category/sale"
                className="cursor-pointer hover:underline"
              >
                Wyprzedaż
              </Link>
            </li>
            <li>
              <Link
                href="/category/top-rated"
                className="cursor-pointer hover:underline"
              >
                Najwyżej oceniane
              </Link>
            </li>
          </ul>
        </div>

        {/* Information Section with animation */}
        <div>
          <h3
            className="font-bold mb-3 cursor-pointer sm:hidden"
            onClick={() => toggleSection("information")}
          >
            Informacje
          </h3>
          <ul
            className={`${
              openSection === "information" ? "max-h-40" : "max-h-0"
            } overflow-hidden transition-all duration-300 ease-in-out sm:max-h-full sm:block`}
          >
            <li>
              <Link href="/about" className="cursor-pointer hover:underline">
                O nas
              </Link>
            </li>
            <li>
              <Link href="/contact" className="cursor-pointer hover:underline">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/policy" className="cursor-pointer hover:underline">
                Polityka prywatności
              </Link>
            </li>
          </ul>
        </div>

        {/* Account Section with animation */}
        <div>
          <h3
            className="font-bold mb-3 cursor-pointer sm:hidden"
            onClick={() => toggleSection("account")}
          >
            Konto
          </h3>
          <ul
            className={`${
              openSection === "account" ? "max-h-40" : "max-h-0"
            } overflow-hidden transition-all duration-300 ease-in-out sm:max-h-full sm:block`}
          >
            <li>
              <Link
                href="/account/orders"
                className="cursor-pointer hover:underline"
              >
                Moje zamówienia
              </Link>
            </li>
            <li>
              <Link
                href="/account/settings"
                className="cursor-pointer hover:underline"
              >
                Ustawienia konta
              </Link>
            </li>
            <li>
              <Link
                href="/account/help"
                className="cursor-pointer hover:underline"
              >
                Pomoc
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} Powered by Truong a.k.a Cay Da</p>
      </div>
    </footer>
  );
};

export default Footer;
