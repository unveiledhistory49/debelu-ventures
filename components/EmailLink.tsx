"use client";

import { useEffect, useState } from "react";

// Obfuscated contact address (char codes) so the plain address never appears
// in the visible page or as a plain string in the served source.
const ADDRESS_CODES = [
  106, 111, 110, 97, 104, 109, 105, 108, 108, 64, 111, 117, 116, 108, 111,
  111, 107, 46, 99, 111, 109,
];

export default function EmailLink({
  label = "Write to us",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const [href, setHref] = useState("#");

  useEffect(() => {
    const address = String.fromCharCode(...ADDRESS_CODES);
    setHref(`mailto:${address}`);
  }, []);

  return (
    <a href={href} aria-label="Send us an email" className={className}>
      {label}
    </a>
  );
}
