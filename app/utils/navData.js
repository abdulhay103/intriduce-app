const navData = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/about", name: "About" },
  { id: 3, href: "/portfolio", name: "Portfolio" },
  {
    id: 4,
    href: { pathname: "/blog", query: { name: "book", price: "200" } },
    name: "Blog",
  },
  { id: 5, href: "/contact", name: "Contact" },
];

export default navData;
